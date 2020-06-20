from django.views.generic import TemplateView
from django.urls import reverse, reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from braces.views import SelectRelatedMixin
from django.views import generic
from posts import models
from posts import forms
from django.shortcuts import render

class TestPage(TemplateView):
    template_name= 'test.html'

class ThanksPage(TemplateView):
    template_name= 'thanks.html'

# class HomePage(TemplateView):
#     template_name = 'index.html'

class MasterPage(TemplateView):
    template_name = 'index.html'


class HomePage(LoginRequiredMixin,SelectRelatedMixin,generic.CreateView):

    fields = ('message','group')
    model = models.Post



    def form_valid(self,form):
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return super().form_valid(form)
