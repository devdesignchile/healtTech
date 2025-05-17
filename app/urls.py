
from django.urls import path
from app import views

urlpatterns = [
    path('', views.index, name='home'),
    path('index/', views.index, name='index'),
    path('servicios/', views.servicios, name='servicios'),
    path('diseño-web/', views.diseno_web, name='diseño_web'),
    path('seo/', views.seo, name='seo'),
    path('branding/', views.branding, name='branding'),
    path('principiante/', views.principiante, name='principiante'),
    path('intermedio/', views.intermedio, name='intermedio'),
    path('avanzado/', views.avanzado, name='avanzado'),
    path('contacto/', views.contacto, name='contacto'),
    path('planes/', views.planes, name='planes'),
    path('nosotros/', views.nosotros, name='nosotros'),
]