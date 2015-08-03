## Example HAProxy SSL setup

To run this example, make sure docker and docker-compose are installed.

Then run:

```
docker-compose build
docker-compose up -d haproxy
```

To hit the server, go to:

https://a.b.c.d.xip.io

Where `a.b.c.d` is your docker/boot2docker IP.
