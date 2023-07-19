---
sidebar_position: 3
---

# Обратная матрица

import Formula from '@components/Formula'

import Highlight from '@components/Highlight'

import Figure from '@components/Figure'

Квадратная матрица $A$ $n$–го порядка называется **вырожденной**, если определитель этой матрицы равен нулю $|A|=0$, и
**невырожденной**, если $|A|\ne 0$ .

Матрица $A^{-1}$ называется обратной к матрице $A$, если .

<Formula description="">

$A \times A^{-1}= A^{-1} \times A = E$

</Formula>

Основным методом вычисления обратной матрицы $A^{-1}$ является метод **присоединенной матрицы**.

Матрица $\tilde{A}$, составленная из алгебраических дополнений $A_{ij}$ соответствующих элементов $a_{ij}$ матрицы $A$,
называется **присоединенной к матрице** $A$:

<Formula description="">

$\tilde{A} =
\begin{pmatrix}
 A_{11} & A_{12} & \dots & A_{1n} \\
 A_{21} & A_{22} & \dots & A_{2n} \\
 \dots & \dots & \dots & \dots \\
 A_{n1} & A_{n2} & \dots & A_{nn}
\end{pmatrix}$

</Formula>

**Теорема**. Если матрица $A$ невырождена, то существует, и притом единственная, обратная матрица $A^{-1}$, равная

<Formula description="">

$A^{-1} = \cfrac{1}{\triangle} \cdot (\tilde{A})^T$

</Formula>

где

- $\triangle$ - определитель матрицы $A$;
- $(\tilde{A})^T$ - транспонированная присоединенная матрица.

Свойство 1. $(A^{-1})^T=(A^T)^{-1}$

Свойство 2. $(A \times B)^{-1}=B^{-1} \times A^{-1}$

Свойство 3. $(\alpha \times B)^{-1}=\cfrac{1}{\alpha} \times B^{-1}$

<Highlight color="#F4F6F6">

**Пример**.

Найти $A^{-1}$, для матрицы $A=\begin{pmatrix}
 1 & 0 & 3 \\
 -1 & -1 & 2 \\
 4 & 7 & 2
\end{pmatrix}$

**Решение**

Вычислим определитель матрицы:

<Formula description="">

$|A| =\begin{vmatrix}
 1 & 0 & 3 \\
 -1 & -1 & 2 \\
 4 & 7 & 2
\end{vmatrix} = -25 \ne 0$

</Formula>

Значит заданная матрица $A$ невырожденная и для нее можно найти обратную матрицу $A^{-1}$.

Найдем алгебраические дополнения для присоединенной матрицы $\tilde{A}$:

$A_{11}=(-1)^{1+1} \cdot \begin{vmatrix} -1 & 2 \\ 7 & 2 \end{vmatrix} = -16$

$A_{12}=(-1)^{1+2} \cdot \begin{vmatrix} -1 & 2 \\ 4 & 2 \end{vmatrix} = 10$

$A_{13}=(-1)^{1+3} \cdot \begin{vmatrix} -1 & -1 \\ 4 & 7 \end{vmatrix} = -3$

$A_{21}=(-1)^{2+1} \cdot \begin{vmatrix} 0 & 3 \\ 7 & 2 \end{vmatrix} = 21$

$A_{22}=(-1)^{2+2} \cdot \begin{vmatrix} 1 & 3 \\ 4 & 2 \end{vmatrix} = -10$

$A_{23}=(-1)^{2+3} \cdot \begin{vmatrix} 1 & 0 \\ 4 & 7 \end{vmatrix} = -7$

$A_{31}=(-1)^{3+1} \cdot \begin{vmatrix} 0 & 3 \\ -1 & 2 \end{vmatrix} = 3$

$A_{32}=(-1)^{3+2} \cdot \begin{vmatrix} 1 & 3 \\ -1 & 2 \end{vmatrix} = -5$

$A_{33}=(-1)^{3+3} \cdot \begin{vmatrix} 1 & 0 \\ -1 & -1 \end{vmatrix} = -1$

$\tilde{A}=\begin{pmatrix} -16 & 10 & -3 \\ 21 & -10 & -7 \\ 3 & -5 & -1 \end{pmatrix}$ &mdash; присоединенная матрица

Обратная матрица будет иметь вид:

$A^{-1}=\cfrac{1}{\triangle} \cdot (\tilde{A})^T = -\cfrac{1}{25} \cdot \begin{pmatrix} -16 & 10 & -3 \\ 21 & -10 & -7 \\ 3 & -5 & -1 \end{pmatrix}^T = -\cfrac{1}{25} \cdot \begin{pmatrix} -16 & 21 & 3 \\ 10 & -10 & -5 \\ -3 & -7 & -1 \end{pmatrix} = \begin{pmatrix} \cfrac{16}{25} & -\cfrac{21}{25} & -\cfrac{3}{25} \\ & & \\ -\cfrac{10}{25} & \cfrac{10}{25} & \cfrac{5}{25} \\  & & \\ \cfrac{3}{25} & \cfrac{7}{25} & \cfrac{1}{25} \end{pmatrix} = \begin{pmatrix} \cfrac{16}{25} & -\cfrac{21}{25} & -\cfrac{3}{25} \\ & & \\ -\cfrac{2}{5} & \cfrac{2}{5} & \cfrac{1}{5} \\  & & \\ \cfrac{3}{25} & \cfrac{7}{25} & \cfrac{1}{25} \end{pmatrix}$

<br/>

Таким образом

<br/>

$A^{-1}=\def\arraystretch{2.5}\begin{pmatrix} \cfrac{16}{25} & -\cfrac{21}{25} & -\cfrac{3}{25} \\ -\cfrac{2}{5} & \cfrac{2}{5} & \cfrac{1}{5} \\ \cfrac{3}{25} & \cfrac{7}{25} & \cfrac{1}{25} \end{pmatrix}$

</Highlight>
