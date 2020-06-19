from django.contrib import admin
from .models import PropertyOWner

class PropertyOWnerAdmin(admin.ModelAdmin):
    list_display =('id', 'name', 'email', 'date_reg')
    list_display_links =('id', 'name')
    search_fields =('name', )
    list_per_page =25

admin.site.register(PropertyOWner, PropertyOWnerAdmin)
