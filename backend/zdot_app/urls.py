from django.urls import path
from .views import JobApplicationView

urlpatterns = [
    path('api/contact/', JobApplicationView.as_view(), name='job-application'),
]