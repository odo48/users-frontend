FROM node:12

RUN mkdir -p /home/react/app
COPY . /home/react/app
WORKDIR /home/react/app
RUN chmod a+w -R /home/react/app

RUN npm install

CMD [ "sh", "-c", "npm run start" ]

EXPOSE 3000
