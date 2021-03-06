#!/bin/bash
goecheck(){
#######################################
#goe mobility check
if [[ $evsecon == "goe" ]]; then
	output=$(curl --connect-timeout 1 -s http://$goeiplp1/status)
	if [[ $? == "0" ]] ; then
		state=$(echo $output | jq -r '.alw')
		if grep -q 1 "/var/www/html/openWB/ramdisk/ladestatus"; then
			if ((state == "0")) ; then
				curl --silent --connect-timeout $goetimeoutlp1 -s http://$goeiplp1/mqtt?payload=alw=1 > /dev/null
			fi
		fi
		if grep -q 0 "/var/www/html/openWB/ramdisk/ladestatus"; then
			if ((state == "1")) ; then
				curl --silent --connect-timeout $goetimeoutlp1 -s http://$goeiplp1/mqtt?payload=alw=0 > /dev/null
			fi
		fi
		oldcurrent=$(echo $output | jq -r '.amp')
		current=$(</var/www/html/openWB/ramdisk/llsoll)
		if (( oldcurrent != $current )) ; then
			curl --silent --connect-timeout $goetimeoutlp1 -s http://$goeiplp1/mqtt?payload=amp=$current > /dev/null
		fi
	fi
fi
if [[ $lastmanagement == "1" ]]; then
	if [[ $evsecons1 == "goe" ]]; then
		output=$(curl --connect-timeout 1 -s http://$goeiplp2/status)
		if [[ $? == "0" ]] ; then
			state=$(echo $output | jq -r '.alw')
			if grep -q 1 "/var/www/html/openWB/ramdisk/ladestatuss1"; then
				if ((state == "0")) ; then
					curl --silent --connect-timeout $goetimeoutlp2 -s http://$goeiplp2/mqtt?payload=alw=1 > /dev/null
				fi
			fi
			if grep -q 0 "/var/www/html/openWB/ramdisk/ladestatuss1"; then
				if ((state == "1")) ; then
					curl --silent --connect-timeout $goetimeoutlp2 -s http://$goeiplp2/mqtt?payload=alw=0 > /dev/null
				fi
			fi
			oldcurrent=$(echo $output | jq -r '.amp')
			current=$(</var/www/html/openWB/ramdisk/llsolls1)
			if (( oldcurrent != $current )) ; then
				curl --silent --connect-timeout $goetimeoutlp2 -s http://$goeiplp2/mqtt?payload=amp=$current > /dev/null
			fi
		fi
	fi
	if [[ $lastmanagements2 == "1" ]]; then
		if [[ $evsecons2 == "goe" ]]; then
			output=$(curl --connect-timeout 1 -s http://$goeiplp3/status)
			if [[ $? == "0" ]] ; then
				state=$(echo $output | jq -r '.alw')
				if grep -q 1 "/var/www/html/openWB/ramdisk/ladestatuss2"; then
					if ((state == "0")) ; then
						curl --silent --connect-timeout $goetimeoutlp3 -s http://$goeiplp3/mqtt?payload=alw=1 > /dev/null
					fi
				fi
				if grep -q 0 "/var/www/html/openWB/ramdisk/ladestatuss2"; then
					if ((state == "1")) ; then
						curl --silent --connect-timeout $goetimeoutlp3 -s http://$goeiplp3/mqtt?payload=alw=0 > /dev/null
					fi
				fi
				oldcurrent=$(echo $output | jq -r '.amp')
				current=$(</var/www/html/openWB/ramdisk/llsolls2)
				if (( oldcurrent != $current )) ; then
					curl --silent --connect-timeout $goetimeoutlp3 -s http://$goeiplp3/mqtt?payload=amp=$current > /dev/null
				fi
			fi
		fi
	fi
fi
}
