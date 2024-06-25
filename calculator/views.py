from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, 'calculator/index.html', {'result': None})

def calculate(request):
    if request.method == 'POST':
        x = float(request.POST['x'])
        y = float(request.POST['y'])
        operation = request.POST['operation']

        result = None
        error = None

        try:
            if operation == 'add':
                result = x + y
            elif operation == 'subtract':
                result = x - y
            elif operation == 'multiply':
                result = x * y
            elif operation == 'divide':
                if y == 0:
                    error = "Cannot divide by zero"
                else:
                    result = x / y
        except Exception as e:
            error = str(e)

        return render(request, 'calculator/index.html', {'result': result, 'error': error})
    return HttpResponse("Invalid request", status=400)
