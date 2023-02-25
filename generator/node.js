fs=require('fs');
LIST=`
Fake-Surveillance-Camera
Control-Signal-Amplifier
Diagnostic-Pulse-Generator
Animated-Esports-Sign
Drinking-Game-Scorekeeper
Harmonic-Maximization-Engine
Passive-Infrared-Sensor
Virtual-Reality-Buzzer

Wireless-Game-Controller
Laser-Tag-Equipment
Color-Changing-Vape-Pen
Unknown-Optimization-Device
Token-Based-Payment-Kiosk
Personal-Sandwich-Maker
Carbine-Target-Illuminator
Haunted-Doll
Aquaponics-Maintenance-Robot
Remote-Kill-Switch
Smart-Grid-Control-Router
Pocket-I-Ching-Oracle
Precision-Food-Scale
Cryptocurrency-Deposit-Terminal
Pollution-Sensing-Smart-Window
Traffic-Signal
Meat-Based-Printer
Electronic-Door-Lock
Deep-Sea-Sensor-Grid
Spoiler-Blocking-Headphones
Color-Coordinating-Shoes
Airline-Cocktail-Mixer
Safetynet-Tracking-Badge


















Cold-Storage-Robot
Scientific-Chronometer
Automatic-Pet-Feeder
Electronic-Practice-Target
Kelp-Harvesting-Robot
Sushi-Making-Robot
Thorium-Reactor-Status-Monitor
Brain-Computer-Interface
Cellular-Scaffold-Printer
Neural-Processor-Logic-Board
Shenzhen-IO-Trailer
Aquatic-Harvesting-Robot
Personal-Sandwich-Assembler
`.split`\n`.map(x=>x?fs.readdirSync('Solutions/'+x).filter(x=>x!='README.txt'&&x!='solutions.psv'):[]);
//f=s=>(v=s.match(/\d+/g),v[0]*1e8+v[1]*10+v[2]);
//BABE=fs.readdirSync('Images').sort((a,b)=>f(a)-f(b));
BABE=fs.readdirSync('Images');
BABE.forEach(x=>{
	a=x.split(/g|,/g);
	b=LIST[a[1]][a[2]-1];
	//if (!b) b='*********************************************************************************************';
	//fs.copyFileSync('Images/'+x, 'Image2/'+b+a[3]);
	//console.log ('Images/'+x, 'Image2/'+b+a[3]);
	if (!b) return;
	if (a[3]=='0.bmp') {
		p=fs.readFileSync('Images/'+x);
		q=fs.readFileSync('Images/'+x.slice(0,-5)+'1.bmp');
		r=p.map((x,i)=>x*0.9+q[i]*0.1+0.5);
		fs.writeFileSync('Image2/'+b.slice(0,-4)+'.bmp', r);
	}
});
