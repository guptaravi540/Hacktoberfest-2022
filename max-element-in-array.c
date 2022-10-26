#include<stdio.h>
int maxarray(int a[],int n);
void main(){
    int a[10];
    int n,i,b;
    printf("enter the length of array: ");
    scanf("%d",&n);
    for(i=0;i<n;++i){
    printf("enter the %d elemnt of the array ",i+1);
    scanf("%d",&a[i]);
    }
    b=maxarray(a,n);
    printf("the largest elemnt in this element is : %d ",b);  
}
int maxarray(int a[],int n){
  int i,b;
 for(i=0;i<n;i++)
    {
    if(a[i]>=b){
        b = a[i];
      }
    }
    return b;
}