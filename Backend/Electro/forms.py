from django import forms


class RegisterForm(forms.Form):
    username = forms.CharField(label='Username', widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Username'}
    ))
    email = forms.CharField(label='Email', widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Email'}
    ))
    password = forms.CharField(label='Password', widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'placeholder': 'Password'}
    ))
    submit = forms.CharField(label='Submit', widget=forms.HiddenInput(
        attrs={'class': 'form-control'}
    ))


class LoginForm(forms.Form):
    username = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Username'}
    ))
    password = forms.CharField(widget=forms.PasswordInput(
        attrs={'class': 'form-control', 'placeholder': 'Password'}
    ))
    submit = forms.CharField(widget=forms.HiddenInput(
        attrs={'class': 'form-control'}
    ))


class SearchForm(forms.Form):
    search = forms.CharField(widget=forms.TextInput(
        attrs={'class': 'form-control', 'placeholder': 'Search'}
    ))
    submit = forms.CharField(widget=forms.HiddenInput(
        attrs={'class': 'form-control'}
    ))


class ReviewsForm(forms.Form):
    name = forms.CharField(widget=forms.TextInput())
    email = forms.CharField(widget=forms.TextInput())
    review = forms.CharField(widget=forms.TextInput())
    submit = forms.CharField(widget=forms.HiddenInput())


class VoucherCodeForm(forms.Form):
    code = forms.CharField(widget=forms.TextInput())
    submit = forms.CharField(widget=forms.HiddenInput())