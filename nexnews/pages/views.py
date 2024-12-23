from django.shortcuts import render


# Страница "О нас"
def about(request):
    template = 'pages/about.html'
    return render(request, template)

def contact(request):
    template = 'pages/contact.html'
    return render(request, template)