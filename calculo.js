
//funcion que devuelve si los rectangulos colisionan o no
/*
Recibe como primer argumente un rectangulo, los 4 lados deberán ser llenados para su correcto funcionamiento
Se repite lo mismo para el segundo rectangulo
*/

const getInterseccion = (rectangulo1, rectangulo2) => {

    return !(rectangulo2.left > rectangulo1.right ||
        rectangulo2.right < rectangulo1.left ||
        rectangulo2.top > rectangulo1.bottom ||
        rectangulo2.bottom < rectangulo1.top);
};

const handleButtonCalculo = () => {

    var rectangulo1 = {
        left: $('#rect1_1').val(),
        top: $('#rect1_2').val(),
        right: $('#rect1_3').val(),
        bottom: $('#rect1_4').val()
    };

    var rectangulo2 = {
        left: $('#rect2_1').val(),
        top: $('#rect2_2').val(),
        right: $('#rect2_3').val(),
        bottom: $('#rect2_4').val()
    };

    let procede = true;

    Object.entries(rectangulo1).forEach(([key, value]) => {
        if (value === '') {
            procede = false;
        }
    });

    Object.entries(rectangulo2).forEach(([key, value]) => {
        if (value === '') {
            procede = false;
        }
    });

    if (procede) {
        const resp = getInterseccion(rectangulo1, rectangulo2);

        $('#resultado_calculo').text(resp ? 'Entrechocan' : 'no entrechocan');

    }


};


//EJEMPLO EN C# - RECTANGE

// public bool IntersectsWith(Rectangle rect)
// {
//   if (rect.X < this.X + this.Width && this.X < rect.X + rect.Width && rect.Y < this.Y + this.Height)
//     return this.Y < rect.Y + rect.Height;
//   else
//     return false;
// }

// versión estática:

// public static Rectangle Intersect(Rectangle a, Rectangle b)
// {
//   int x = Math.Max(a.X, b.X);
//   int num1 = Math.Min(a.X + a.Width, b.X + b.Width);
//   int y = Math.Max(a.Y, b.Y);
//   int num2 = Math.Min(a.Y + a.Height, b.Y + b.Height);
//   if (num1 >= x && num2 >= y)
//     return new Rectangle(x, y, num1 - x, num2 - y);
//   else
//     return Rectangle.Empty;
// }


//fuente: https://stackoverflow.com/questions/335600/collision-detection-between-two-images-in-java
//https://www.geeksforgeeks.org/find-two-rectangles-overlap/
//https://math.stackexchange.com/questions/7356/how-to-find-rectangle-intersection-on-a-coordinate-plane