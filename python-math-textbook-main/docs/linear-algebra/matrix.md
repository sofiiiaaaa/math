---
sidebar_position: 1
---

# Матрицы

import Formula from '@components/Formula'

import Highlight from '@components/Highlight'

## Матрицы

Матрицей размерности $m \times n$ называется совокупность чисел $m \cdot n$, расположенных в виде таблицы из $m$ строк и
$n$ столбцов:

<Formula description="">

$\begin{pmatrix}
 a_{11} & a_{12} & \dots & a_{1n} \\
 a_{21} & a_{22} & \dots & a_{2n} \\
 \dots & \dots & \dots & \dots \\
 a_{m1} & a_{m2} & \dots & a_{mn}
\end{pmatrix}$

</Formula>

Числа $a_{ij}$ называются **элементами матрицы**. Таким образом, первый индекс элемента $a_{ij}$ указывает на номер
строки, второй – на номер столбца, на пересечении которых стоит этот элемент.

Матрица может быть записана следующим образом:

<Formula description="">

$A=(a_{ij})= \|a_{ij}\|, i=1,2,\dots,m; j=1,2,\dots, n$

</Formula>

Матрица размерности $1 \times n$ называется матрицей-строкой и имеет вид:

<Formula description="">

$B=(a_{11} \space a_{12} \space \dots \space a_{1n})$

</Formula>

Матрица размерности $m \times 1$ называется матрицей-столбцом и имеет вид:

<Formula description="">

$C=\begin{pmatrix}
 a_{11} \\
 a_{12} \\
 \dots \\
 a_{m1}
\end{pmatrix}$

</Formula>

Если $m=n$, т.е. число строк матрицы равно числу столбцов, то матрица называется **квадратной матрицей** порядка $n$.

Диагональ квадратной матрицы, составленная из элементов $a_{11},a_{22},\dots,a_{nn}$, называется **главной диагональю**.

**Побочной диагональю** квадратной матрицы называется диагональ, идущая из правого верхнего угла этой матрицы в левый
нижний угол.

Квадратная матрица называется единичной, если на главной диагонали у нее стоят единицы, а остальные элементы – нули.
Единичную матрицу принято обозначать буквой $E$.

<Formula description="">

$E=\begin{pmatrix}
 1 & 0 & \dots & 0 \\
 0 & 1 & \dots & 0 \\
 \cdots & \cdots & \cdots & \cdots \\
 0 & 0 & \dots & 1
\end{pmatrix}$

</Formula>

Квадратная матрица, у которой все элементы, стоящие ниже (или выше) главной диагонали, равны нулю, называется
**треугольной**, например треугольная матрица третьего порядка:

<Formula description="">

$M=\begin{pmatrix}
 a_{11} & a_{12} & a_{13} \\
 0 & a_{22} & a_{23} \\
 0 & 0 & a_{33}
\end{pmatrix}$

</Formula>

Квадратная матрица, у которой все элементы, стоящие выше и ниже главной диагонали, равны нулю, называется
**диагональной**, т.е. $a_{ii} {=}\mathllap{/\,} 0, a_{ij}=0$ при $i{=}\mathllap{/\,}j$:

Диагональная матрица третьего порядка

<Formula description="">

$M=\begin{pmatrix}
 a_{11} & 0 & 0 \\
 0 & a_{22} & 0 \\
 0 & 0 & a_{33}
\end{pmatrix}$

</Formula>

Матрица $\varnothing$ называется нулевой, если все ее элементы равны нулю.

Транспонированием квадратной матрицы называется такое преобразование, при котором ее строки становятся столбцами с теми
же номерами, а столбцы – строками.

Матрицу, транспонированную по отношению к матрице $A$, обозначают $A^T$:

<Formula description="">

если
$A=\begin{pmatrix}
 a_{11} & a_{12} & \dots & a_{1n} \\
 a_{21} & a_{22} & \dots & a_{2n} \\
 \dots & \dots & \dots & \dots \\
 a_{m1} & a_{m2} & \dots & a_{mn}
\end{pmatrix}$,
то
$A^T=\begin{pmatrix}
 a_{11} & a_{21} & \dots & a_{m1} \\
 a_{12} & a_{22} & \dots & a_{m2} \\
 \dots & \dots & \dots & \dots \\
 a_{1n} & a_{2n} & \dots & a_{mn}
\end{pmatrix}$

</Formula>

Заметим, что $(A^T)^T=A$.

### Операции над матрицами и их свойства

Суммой матриц $A=(a_{ij})$ и $B=(b_{ij})$ одинаковой размерности $m \times n$ называется новая матрица $C=A+B$ той же
размерности, элементы которой равны $c_{ij}=a_{ij}+b_{ij}, i=1,2,\dots,m;j=1,2,\dots,n$,

- Свойство 1. $A+B=B+A$
- Свойство 2. $(A+B)+C=A+(B+C)$
- Свойство 3. $A + \varnothing = A$

Произведением матрицы $A=(a_{ij})$ на число $\alpha$ называется новая матрица $C=\alpha \cdot A$, элементы которой
удовлетворяют условию $c_{ij}=\alpha \cdot a_{ij}$, где $i=1,2,\dots,m;j=1,2,\dots,n$

- Свойство 4. $A+(-A)= \varnothing$
- Свойство 5. $(\alpha \cdot \beta)A=\alpha \cdot (\beta A)$
- Свойство 6. $\alpha \cdot (A+B)=\alpha A + \alpha B$
- Свойство 7. $(\alpha + \beta)A=\alpha A + \beta A$
- Свойство 8. $0 \cdot A= \varnothing, 1 \cdot A= A$,

<Highlight color="#F4F6F6">

**Пример**.

Найти $3A+2B$, если $A=\begin{pmatrix}
 2 & 1 & -1 \\
 0 & 1 & -4
\end{pmatrix}$,
$B=\begin{pmatrix}
 -2 & 1 & 0 \\
 -3 & 2 & 2
\end{pmatrix}$

**Решение**

$3A+2B = \begin{pmatrix}
 6 & 3 & -3 \\
 0 & 3 & -12
\end{pmatrix} + \begin{pmatrix}
 -4 & 2 & 0 \\
 -6 & 4 & 4
\end{pmatrix} = \begin{pmatrix}
 2 & 5 & -3 \\
 -6 & 7 & -8
\end{pmatrix}$

</Highlight>

Произведением матрицы $A$ размерности $m \times n$ на матрицу размерности $n \times k$ называется матрица
$C = A \times B$ размерности $m \times k$, элементы которой находятся по формуле:

<Formula description="">

$c_{ij}=\displaystyle\sum_{q=1}^n {a_{iq} \cdot b_{qj}} = a_{i1}b_{1j} + a_{i2}b_{2j}+ \dots + a_{in}b_{nj}$

</Formula>

<Formula description="">

$i=1,2,\dots,m;j=1,2,\dots,k$

</Formula>

т.е. элемент $c_ij$ равен сумме произведений элементов $i$-й строки матрицы $A$ на элементы $j$-го столбца матрицы $B$.

:::tip Важно

При умножении матриц число столбцов первой матрицы (первого множителя) должно равняться числу строк второй матрицы
(второго множителя).

:::

<Highlight color="#F4F6F6">

**Пример**.

Найти $A \times B$, если $A=\begin{pmatrix}
 1 & 2 & 3 \\
 0 & 1 & 2
\end{pmatrix}$,
$B=\begin{pmatrix}
 1 & 2 \\
 0 & 4 \\
 -1 & 0
\end{pmatrix}$

<br/>

**Решение**

$A \times B = \begin{pmatrix}
 1 \cdot 1 + 2 \cdot 0 + 3 \cdot (-1) & 1 \cdot 2 + 2 \cdot 4 + 3 \cdot 0 \\
 0 \cdot 1 + 1 \cdot 0 + 2 \cdot (-1) & 0 \cdot 2 + 1 \cdot 4 + 2 \cdot 0
\end{pmatrix} = \begin{pmatrix}
 -2 & 10 \\
 -2 & 4
\end{pmatrix}$

</Highlight>

- Свойство 9. $A \times B {=}\mathllap{/\,} B \times A$
- Свойство 10. $(A \times B) \times C = A \times (B \times C)$
- Свойство 11. $(A+B) \times C = A \times C + B \times C$
- Свойство 12. $A \times (B + C) = A \times B + A \times C$
- Свойство 13. $A \times E = E \times A = A$
- Свойство 14. $A \times \varnothing = \varnothing \times A = \varnothing$
- Свойство 15. $(A \times B) ^ T = B^T \times A^T$

Матрицы $A$ и $B$ называются **перестановочными**, если $A \times B = B \times A$
