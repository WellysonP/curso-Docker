from bottle import route, run, request

@route('./',method='POST')
def send():
    assunto = request.forms.get('assunto')
    mensagem = request.forms.get("mensagem")
