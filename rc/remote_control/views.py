from django.shortcuts import render
from django.http import HttpResponse

def main_page(request):
    return render(request, 'ult_page/index.html')

def info(request):
    return render(request, 'info_page/info.html')

# Create your views here.
