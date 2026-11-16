---
name: it-development-networking
description: Develop and troubleshoot authorized Windows services and network integrations involving DNS, TCP, TLS, HTTP, reverse proxies, and firewalls.
---

1. Identify the affected component, source client, destination host and port, expected response, and scope of access. Record which Windows environment or account reproduces the issue.
2. Check the layers in order. Use Resolve-DnsName for DNS, Test-NetConnection for TCP, Get-NetTCPConnection for local listeners, and a request to the intended HTTP endpoint for TLS and application behavior. Inspect service and proxy logs for the failing request where available.
3. Compare the known-good path with the failing path. Check whether the application listens on loopback or the intended interface. Verify the expected HTTP Host header, TLS certificate name, proxy routing and health endpoint.
4. Change only the component implicated by evidence. For configuration edits preserve a rollback path and verify the service under its normal account. Keep TLS validation and firewall rules in place while diagnosing and agree on any changes that expand access.
5. Verify locally and from the intended client network. Capture the exact symptom, root cause, changed configuration or code, and the observed behavior after the fix.
