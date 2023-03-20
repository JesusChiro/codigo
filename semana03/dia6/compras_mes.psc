Proceso compras_mes
	Definir item1	Como Caracter;
	Definir precioItem1 Como Entero;
	Definir item2 Como Caracter;
	Definir precionItem2 Como Entero;
	Definir item3 Como Caracter;
	Definir precioItem3 Como Entero;
	Definir total Como Real;
	Definir usur Como Caracter;
	
	Escribir "Buen día. Ingrese Usuario";
	Leer usur;
	Escribir "Hola " + usur + ", Bienvenido";
	Escribir "--------------------------------------";
	
	Escribir "Ingrese Producto 1";
	Leer item1;
	Escribir "Ingrese Precio";
	Leer precioItem1;
	Escribir "Ingrese Producto 2";
	Leer item2;
	Escribir "Ingrese Precio";
	Leer precionItem2;
	Escribir "Ingrese Producto 3";
	Leer item3;
	Escribir "Ingrese Precio";
	Leer precioItem3;
	total<-	precioItem1+precionItem2+precioItem3;
	
	Escribir "Ud. Está llevando los siguientes productos: ";
	Escribir item1;
	Escribir item2;
	Escribir item3;
	
	Escribir "El total a pagar es: S/.", total;
FinProceso
