from django.contrib.auth.models import User
from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField()
    image = models.ImageField(upload_to='products/')
    video = models.FileField(upload_to='products/', null=True, blank=True)

    def __str__(self):
        return self.name


class VoucherCode(models.Model):
    code = models.CharField(max_length=100)

    def __str__(self):
        return self.code


class Cart(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    voucher_code = models.ForeignKey(VoucherCode, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.product.name


class Category(models.Model):
    name = models.CharField(max_length=100)
    parent = models.ForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')

    def __str__(self):
        return self.name
