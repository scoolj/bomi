from django.contrib import admin
from .models import PropertyOwner

class PropertyOwnerAdmin(admin.ModelAdmin):
    list_display =('id', 'name', 'email', 'date_reg')
    list_display_links =('id', 'name')
    search_fields =('name', )
    list_per_page =25

admin.site.register(PropertyOwner, PropertyOwnerAdmin)
