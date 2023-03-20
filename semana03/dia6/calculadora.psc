Proceso sin_titulo
	Definir numero1 Como Entero;
	Definir numero2 Como Entero;
	Definir suma Como Entero;
	Definir resta Como Entero;
	Definir producto Como Entero;
	Definir division Como Real;
	Escribir 'Ingrese numero 1: ';
	Leer numero1;
	Escribir 'Ingrese numero 2: ';
	Leer numero2;
	suma <- numero1+numero2;
	resta <- numero1-numero2;
	producto <- numero1*numero2;
	Si (numero2=0) Entonces
		Escribir 'No se puede dividir entre 0';
		division <- 0;
	SiNo
		division <- numero1/numero2;
	FinSi
	Escribir 'La suma de los numeros es: ',suma;
	Escribir 'La resta de los numeros es: ',resta;
	Escribir 'El producto de los numeros es: ',producto;
	Escribir 'La division de los numeros es: ',division;
FinProceso
