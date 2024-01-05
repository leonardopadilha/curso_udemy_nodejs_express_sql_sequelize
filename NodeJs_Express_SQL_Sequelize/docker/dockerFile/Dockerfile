FROM ubuntu:latest

#após terminar de subir o container, o comando informado em cmd será executado
# Obs.: O CMD pode ser substituido no momento em que o container está subindo mas o 
# ENTRYPOINT não pode ser substituido mas executará ambos comandos
#ENTRYPOINT [ "docker-entrypoint.py" ]

CMD [ "echo", "Hello World!" ]

#Bridge => Mescla meu host e container na mesma rede
#Overlay => É quando há várias máquinas utilizando docker e todas essas máquinas passam parte da mesma rede.
#MacVlan => Usa mac address, tipo de uma rede isolada
#None => Sem rede, signfica que o container está isolado.