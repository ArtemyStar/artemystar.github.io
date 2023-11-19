from django.shortcuts import render


def index(request):
    return render(request, 'index.html', {'style': "{% static 'css/style.css' %}",
                                          'tvlogo': "{% static 'img/tv-logo.png' %}",
                                          'device': "{% static 'img/one-common-device-image.png' %}",
                                          'js': "{% static 'js/app.js' %}"})


def form(request):
    return render(request, 'form.html')