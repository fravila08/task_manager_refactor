from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from django.http import HttpResponse
from django.core.serializers import serialize
from django.contrib.auth import authenticate, login, logout
import json
# Create your views here.

def home(request):
    the_index = open('static/index.html').read()
    return HttpResponse(the_index)


class User_Manager(APIView):
    def post(self, request):
        if not request.user.is_authenticated:
            try:
                email = request.data['email']
                password = request.data['password']
                new_user = App_User.objects.create_user(username = email, email = email, password = password)
                new_user.save()
                return Response({'success' : True})
            except Exception as e:
                print(e)
                return Response({'success' : False})
        else:
            try:
                logout(request)
                return Response({"log_out" : True})
            except Exception as e:
                return Response({"log_out" : False})
            
        
    def put(self, request):
        try:
            email = request.data['email']
            password = request.data['password']
            user = authenticate(username = email, password = password)
            if user is not None and user.is_active:
                login(request._request, user)
                return Response({"login" : True})
            else:
                return Response({"login" : False})
        except Exception as e:
            print(e)
            return Response({"login" : False})
        
    def get(self, request):
        try:
            if request.user.is_authenticated:
                user = {}
                user_info = json.loads(serialize("json", [request.user], fields = ['email']))
                user['id']= user_info[0]['pk']
                user['email'] = user_info[0]['fields']['email']
                return Response({"user" : user})
            else:
                return Response({"user" : None})
        except Exception as e:
            print(e)
            return Response({"user" : None})
        

class Task_Handler(APIView):
    def get(self, request, id):
        try:
            task = Task.objects.filter(id = id, user = request.user).values().first()
            return Response({"tasks" : task})
        except Exception as e:
            print(e)
            return Response({'task' : None})
            
    
    def post(self, request):
        try:
            title = request.data['title']
            description = request.data['description']
            new_task = Task.objects.create(title = title, description = description, user = request.user)
            new_task.save()
            return Response({f"success" : True})
        except Exception as e:
            print(e)
            return Response({"success" : False})
        
        
    def put(self, request, id):
        try:
            task = Task.objects.get(id = id, user = request.user)
            title = request.data['title'] if 'title' in request.data else None
            description = request.data['description'] if 'description' in request.data else None
            completed = request.data['completed'] if 'completed' in request.data else False
            if title is not None:
                task.change_task_title(title)
            if description is not None:
                task.change_task_description(description)
            if completed:
                task.change_task_completion()
            return Response({"update" : True})
        except Exception as e:
            print(e)
            return Response({"update" : True})
        
    def delete(self, request, id):
        try:
            task = Task.objects.get(id = id, user = request.user)
            task.delete()
            return Response({"task_deleted" : True})
        except Exception as e:
            print(e)
            return Response({"task_deleted" : False})
        
class Multi_Task_Handler(APIView):
    
    def get(self, request):
        tasks = list(Task.objects.filter(user = request.user).values())
        ordered_tasks = sorted(tasks, key=lambda task: task['id'])
        return Response({"tasks" : ordered_tasks})
                
            
            
        
            
                
        
        