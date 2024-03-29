from django.shortcuts import render, redirect
from .forms import RegistartionForm


def index(request):
    return render(request, 'index.html')


def form(request):
    error = ''
    if request.method == 'POST':
        form = RegistartionForm(request.POST)

        if form.is_valid():
            form.save()
            return redirect('films')
        else:
            error = 'Неверная форма'

    form = RegistartionForm()
    data = {
        'form': form,
        'error': error
    }
    return render(request, 'form.html', data)


def films(request):
    return render(request, 'films.html')