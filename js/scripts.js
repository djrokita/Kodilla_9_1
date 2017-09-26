function getTriangleArea(a, h)
{
	if ((a < 0) || (h < 0)) return 'Nieprawidłowe dane';
	return 1/2 * a * h;
}

console.log(getTriangleArea(10, 6));
var triangleArea1 = getTriangleArea(25, 10.5);
var triangleArea2 = getTriangleArea(5, 0);
var triangleArea3 = getTriangleArea(-30, 5);
var triangleArea4 = getTriangleArea(10, 20);

console.log(triangleArea1);
console.log(triangleArea2);
console.log(triangleArea3);
console.log(triangleArea4);