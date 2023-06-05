FROM ubuntu:20.04

WORKDIR /app
copy app.py .

RUN apt-get update && apt-get install -y python3 python3-pip
RUN pip3 install numpy

EXPOSE 5000