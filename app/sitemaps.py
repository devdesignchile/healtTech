from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    priority = 0.8
    changefreq = 'monthly'

    def items(self):
        return [
            'home',
            'index',
            'servicios',
            'diseño_web',
            'seo',
            'branding',
            'principiante',
            'intermedio',
            'avanzado',
            'planes',
            'nosotros',
            'egresados',
        ]

    def location(self, item):
        return reverse(item)
