from django.shortcuts import render


# Страница "О нас"
def about(request):
    template = 'pages/about.html'
    return render(request, template)

def charcreate(request):
    template = 'pages/charcreate.html'
    return render(request, template)