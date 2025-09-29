from django.db import models

# Create your models here.
class JobApplication(models.Model):   # <-- Capital A
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email_address = models.CharField(max_length=254)
    phone_number = models.CharField(max_length=20)
    years_of_experience = models.CharField(max_length=20)
    heard_about_us = models.CharField(max_length=100)
    upload_resume = models.CharField(max_length=100)
    github_link = models.CharField(max_length=200, blank=True, null=True)
    linkedin_link = models.CharField(max_length=200, blank=True, null=True)
    figma_link = models.CharField(max_length=200, blank=True, null=True)
    applied_at = models.DateTimeField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'jobapplication'
