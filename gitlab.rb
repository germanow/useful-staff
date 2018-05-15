# commit read timeout
gitlab_rails['git_timeout'] = 600

# nginx timeout
nginx['keepalive_timeout'] = 300

# unicorn timeout
unicorn['worker_timeout'] = 300
# CPU core + 1 = worker_process
unicorn['worker_processes'] = 3
