---
sidebar_position: 2
---

# Определители

import Formula from '@components/Formula'

import Highlight from '@components/Highlight'

import Figure from '@components/Figure'

import useBaseUrl from '@docusaurus/useBaseUrl';

## Определители

Для квадратных матриц существует численная характеристика - _определитель_, которая также имеет и многочисленные другие
приложения.

Определителем второго порядка квадратной матрицы $A=\begin{pmatrix}
 a_{11} & a_{12} \\
 a_{21} & a_{22}
\end{pmatrix}$
называется число, равное

<Formula description="">

$
\bigtriangleup = |A| = \det A =
\begin{vmatrix}
a_{11} & a_{12} \\
a_{21} & a_{22}
\end{vmatrix}
= a_{11} \cdot a_{22} - a_{12} \cdot a_{21}
$

</Formula>

Определителем третьего порядка квадратной матрицы
$A=\begin{pmatrix}
 a_{11} & a_{12} & a_{13} \\
 a_{21} & a_{22} & a_{23} \\
 a_{31} & a_{32} & a_{33}
\end{pmatrix}$
называется число, равное

<Formula description="">

$
\bigtriangleup = |A| = \det A =
\begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix}
= a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33}
$

</Formula>

Выражение определителя третьего порядка является достаточно громоздким. Для запоминания формулы используют «правило
треугольника» или "правило Саррюса", которые схематично можно изобразить следующим образом:

<Figure description="Рис. Правило
треугольника"> 
<img src={useBaseUrl("/img/module-01/det-triangle.jpg")} /> 
</Figure>

<Figure description="Рис. Правило Саррюса"> 
<img src={useBaseUrl("/img/module-01/determinant.png")} /> 
</Figure>

## Свойства определителей

Перечислим некоторые простейшие свойства определителей.

_Свойство 1_. Определитель не меняется при транспонировании матрицы.

<Formula description="">

$
\begin{vmatrix}
4 & -1 & 0 \\
1 & 2 & 10 \\
-7 & -3 & -7
\end{vmatrix}
= -
\begin{vmatrix}
4 & 1 & -7 \\
-1 & 2 & -3 \\
0 & 10 & -7
\end{vmatrix}
$

</Formula>

_Свойство 2_. Если матрица содержит строку, состоящую из нулей, то ее определитель равен нулю.

_Свойство 3_. Если в матрице поменять местами какие-нибудь две строки, то ее определитель изменит знак на
противоположный.

<Formula description="">

$
\begin{vmatrix}
2 & 0 & -1 \\
11 & 4 & 7 \\
-6 & 0 & 0
\end{vmatrix}
= -
\begin{vmatrix}
11 & 4 & 7 \\
2 & 0 & -1 \\
-6 & 0 & 0
\end{vmatrix}
$

</Formula>

_Свойство 4_. Если в матрице есть две одинаковые строки, то ее определитель равен нулю.

_Свойство 5_. При умножении строки матрицы на число, ее определитель умножается на это число. Пример.

<Formula description="">

$
\begin{vmatrix}
2 & 4 & -12 \\
10 & 3 & 0 \\
1 & -1 & 1
\end{vmatrix}
= 2 \cdot
\begin{vmatrix}
1 & 2 & -6 \\
10 & 3 & 0 \\
1 & -1 & 1
\end{vmatrix}
$

</Formula>

_Свойство 6_. Если все элементы $i$-й строки матрицы представлены в виде суммы двух слагаемых $a_{ij}=b_j+c_j$, то ее
определитель равен сумме определителей двух матриц, у которых все строки, кроме $i$-й, такие же, как и в заданной
матрице, а $i$-я строка в первой матрице состоит из элементов $b_j$, а во второй – из элементов $c_j$.

Прежде чем перейти к следующему свойству, сформулируем важное определение.

Будем говорить, что строка $a=(a_1,a_2,\ldots,a_n)$ является линейной комбинацией строк

<Formula description="">

$b_1=(b_{11},b_{12},\dots,b_{1n}), b_2=(b_{21},b_{22},\dots,b_{2n}),\dots,b_m=(b_{m1},b_{m2},\dots,b_{mn})$

</Formula>

если существуют некоторые числа $\alpha_1,\alpha_2,\dots,\alpha_m$, и не все равные нулю, такие, что

<Formula description="">

$a=\alpha_1 \cdot b_1 + \alpha_2 \cdot b_2 + \dots + \alpha_m \cdot b_m$

</Formula>

_Свойство 7_. Если одна из строк матрицы есть линейная комбинация остальных строк этой матрицы, то ее определитель равен
нулю.

<Formula description="">

$
\begin{vmatrix}
2 & 7 & -1 \\
0 & 1 & 3 \\
2 & 9 & 5
\end{vmatrix}
= 0
$

</Formula>

Этот определитель равен нулю, так как третья строка есть сумма первой строки и второй строки, умноженной на 2.

_Свойство 8_. Определитель матрицы не изменится, если к какой-нибудь ее строке прибавить линейную комбинацию остальных
строк этой матрицы.

Заметим, что из первого свойства вытекает, что все остальные свойства могут быть сформулированы не только для строк
матрицы, но и для ее столбцов.

## Разложение определителя по строке или столбцу

Пусть $A$ - квадратная матрица с элементами $a_{ij}$.

**Дополнительным минором $M_{ij}$ элемента $a_{ij}$** называется определитель матрицы, полученной из матрицы $A$
вычеркиванием той строки и того столбца, на пересечении которых стоит элемент $a_{ij}$, то есть $i$-й строки и $j$-го
столбца.

**Алгебраическим дополнением элемента $a_{ij}$** называется произведение:

<Formula description="">

$A_{ij}=(-1)^{i+j} \cdot M_{ij}$

</Formula>

**Теорема 1 (метод понижения порядка)**. Определитель квадратной матрицы может быть вычислен по формуле:

<Formula description="">

$detA = \displaystyle\sum_{k=1}^n {a_{ik}} \cdot A_{ik} = a_{i1} \cdot A_{i1} + a_{i2} \cdot A_{i2} + \ldots + a_{in} \cdot A_{in}$

</Formula>

Эта формула называется формулой разложения определителя по $i$-й строке.

Аналогично записывается формула для разложения определителя по $j$-му столбцу.

В качестве примера запишем формулу разложения определителя третьего порядка по первой строке:

<Formula description="">

$
\begin{vmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33}
\end{vmatrix} =
a_{11} \cdot \begin{vmatrix}
a_{22} & a_{23} \\
a_{32} & a_{33}
\end{vmatrix} - a_{12} \cdot \begin{vmatrix}
a_{21} & a_{23} \\
a_{31} & a_{33}
\end{vmatrix} + a_{13} \cdot \begin{vmatrix}
a_{21} & a_{22} \\
a_{31} & a_{32}
\end{vmatrix}
$

</Formula>

Заметим, что при использовании формулы разложения определителя по строке (или по столбцу) удобно иметь в этой строке (в
этом столбце) много элементов, равных нулю (тогда соответствующие им миноры не надо будет вычислять). Поэтому полезно
предварительно так преобразовать определитель, используя свойство 8, чтобы в одной из строк (или в одном из столбцов)
только один элемент остался, отличный от нуля.
