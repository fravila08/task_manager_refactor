from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class App_User(AbstractUser):
    email = models.EmailField(max_length=255, unique=True, blank=False, null=False)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS= []
    
class Task(models.Model):
    title = models.CharField(max_length=255, blank=False, null=False)
    description = models.TextField()
    complete = models.BooleanField(default=False)
    user = models.ForeignKey(App_User, on_delete=models.CASCADE, related_name='tasks')
    
    def change_task_completion(self):
        self.complete = not self.complete
        self.save()
        
    def change_task_title(self, new_title):
        self.title = new_title
        self.save()
        
    def change_task_description(self, new_description):
        self.description = new_description
        self.save()
        