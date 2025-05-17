from django.shortcuts import render

def index(request):
    return render(request, 'index.html', {'current_page': 'index'})

def servicios(request):
    return render(request, 'servicios.html', {'current_page': 'servicios'})

def diseno_web(request):
    return render(request, 'diseño_web.html', {'current_page': 'diseño_web'})

def seo(request):
    return render(request, 'seo.html', {'current_page': 'seo'})

def branding(request):
    return render(request, 'branding.html', {'current_page': 'branding'})

def principiante(request):
    return render(request, 'principiante.html', {'current_page': 'principiante'})

def intermedio(request):
    return render(request, 'intermedio.html', {'current_page': 'intermedio'})

def avanzado(request):
    return render(request, 'avanzado.html', {'current_page': 'avanzado'})
def contacto(request):
    return render(request, 'contact.html', {'current_page': 'contacto'})

def planes(request):
    return render(request, 'planes.html', {'current_page': 'planes'})

def nosotros(request):
    return render(request, 'nosotros.html', {'current_page': 'nosotros'})