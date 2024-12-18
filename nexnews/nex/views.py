from django.shortcuts import render

# Главная страница
def index(request):
    return render(request, 'nex/index.html')
