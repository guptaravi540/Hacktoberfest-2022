import 'dart:io';
int recur( int n ) {
  int fact = 1 ;
  if ( n == 1 )
    return 1 ;
  else
    fact = n * recur( n – 1 ) ;
  return fact ;
}
int main( ) {
  print( ' Enter the number of which you want to find the factorial :  ' ) ;
  int? n = int.parse( stdin.readLineSync( ) ! ) ;
  int fact = recur( n ) ;
  print( ' \n Factorial of the number is : $fact ' ) ;
  return 0 ;
}
