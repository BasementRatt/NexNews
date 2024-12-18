from django.shortcuts import render


# Страница "О нас"
def about(request):
    template = 'pages/about.html'
    return render(request, template)