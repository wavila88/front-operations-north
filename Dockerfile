FROM node:16.20-alpine

ENV OPERATIONS_URL=http://cdkin-myfar-korb3zuwpr09-1788869907.us-east-1.elb.amazonaws.com
ENV RECORD_URL=http://cdkin-myfar-korb3zuwpr09-1788869907.us-east-1.elb.amazonaws.com/records
ENV SECURITY_URL=http://cdkin-myfar-korb3zuwpr09-1788869907.us-east-1.elb.amazonaws.com/security

WORKDIR /app


COPY package*.json ./


RUN npm ci --only=production


COPY . .

RUN npm run build


EXPOSE 3000

CMD ["npm", "start"]

#heroku container:push web -a nameless-peak-01824
#docker run --publish 3000:3000 registry.heroku.com/nameless-peak-01824/web:latest
#heroku container:release web -a nameless-peak-01824