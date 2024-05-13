from django.contrib import admin
from .models import *

admin.site.register(Product)
admin.site.register(Category)
admin.site.register(VoucherCode)
admin.site.register(Cart)

# Register your models here.
