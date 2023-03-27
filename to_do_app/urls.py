from django.urls import path
from .views import *

urlpatterns = [
    path('', home, name='home'),
    #POST / PUT / GET
    path('user/', User_Manager.as_view(), name='user'),
    #POST
    path('task/', Task_Handler.as_view(), name='create_task'),
    #GET/ PUT/ DELETE
    path('task/<int:id>/', Task_Handler.as_view(), name='create_task'),
    #GET
    path('tasks/', Multi_Task_Handler.as_view(), name='get_views'),
]
