FROM ubuntu

RUN apt update
RUN apt install -y python3
RUN apt clean

COPY app.py /opt/main.py

CMD python3 /opt/main.py