## Example HAProxy SSL setup

This is a small demonstration of how to terminate SSL at HAProxy, and then
re-establish another SSL connection to the backend servers.

Why would you want to do this? Regulatory compliance, mostly. For instance,
HIPAA requires that all traffic which transmits PHI be encrypted, regardless of
which network it is on. HAProxy can do SSL pass-through, but then you lose
useful proxy-ish things like routing based on host, or modifying headers (such
as adding the X-Forwarded-For header, which is key for proxied setups). To solve
this, we can do a hybrid setup where HAProxy terminates public SSL (the cert
that you bought from a CA), does it's work, then re-encrypts the request when it
sends it off to a backend server.

For this example, we'll use two different certs: the first one (called xip.io)
represents the public-facing cert on the load balancer. The second one, in the
web machines, represents an internal self-signed cert that exists solely for
encrypting internal traffic.

To run this example, make sure docker and docker-compose are installed.

Then run:

```
docker-compose build
docker-compose up -d haproxy
```

To hit the server, go to:

https://a.b.c.d.xip.io

Where `a.b.c.d` is your docker/boot2docker IP. You'll get some warnings about
self-signed certificates, but this is OK.

### Open Questions

* How much extra CPU overhead does this cause?
* Can we quanitify the real danger of using a self-signed cert internally?
