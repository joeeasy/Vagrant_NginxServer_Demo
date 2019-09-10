# -*- mode: ruby -*-
# vi: set ft=ruby :


Vagrant.configure("2") do |config|

  # Box settings
  config.vm.box = "ubuntu/trusty64"
  
  # Provider
  config.vm.provider "virtualbox" do |vb|
  end
  # Netwrk 
  # config.vm.network "forwarded_port", guest: 80, host: 8080, id: "ngingx"
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"
  config.vm.network "private_network", ip: "192.168.33.10"
  # config.vm.network "public_network"

  # Sync folder
  config.vm.synced_folder ".", "/usr/share/nginx/html"


  config.vm.provision "shell", path: "provision.sh"

end
