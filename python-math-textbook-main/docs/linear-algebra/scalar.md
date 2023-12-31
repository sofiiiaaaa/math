---
sidebar_position: 5
---

# Скалярное произведение векторов

import Figure from '@components/Figure'

import Formula from '@components/Formula'

import Highlight from '@components/Highlight'

import useBaseUrl from '@docusaurus/useBaseUrl';

Под скалярным произведением двух векторов $\vec{a}$ и $\vec{b}$ понимается число, равное произведению длин этих векторов
на косинус угла между ними, т.е.

<Formula description="(1)">

$(\vec{a},\vec{b})=|\vec{a}||\vec{b}|cos\phi$

</Formula>

Скалярное произведение векторов $\vec{a}$ и $\vec{b}$ обозначается также символами $\vec{a}\vec{b}$ и
$\vec{a} \cdot \vec{b}$. Углом между векторами и называется угол $\phi$, на который следует повернуть один из векторов,
для того чтобы их направления совпадали (рис. 1). В дальнейшем под углом между векторами будем понимать угол $\phi$,
удовлетворяющий условию $0 \le \phi \le \pi$.

<Figure description="Рис. 1"> 
<img src={useBaseUrl("/img/module-01/pic18.png")} /> 
</Figure>

Скалярное произведение обладает следующими свойствами:

1. $(\vec{a},\vec{b})=(\vec{b},\vec{a})$
2. $\vec{a}^2=(\vec{a},\vec{a})=|\vec{a}|^2$
3. $(\lambda\vec{a},\vec{b})=\lambda(\vec{a},\vec{b})$
4. $(\vec{a}+\vec{b}, \vec{c})=(\vec{a},\vec{c})+(\vec{b},\vec{c})$

Если векторы $\vec{a}$ и $\vec{b}$ заданы своими координатами

$\vec{a}=x_1\vec{i}+y_1\vec{j}+z_1\vec{k},\vec{b}=x_2\vec{i}+y_2\vec{j}+z_2\vec{k}$

то перемножая эти векторы как многочлены, что возможно в силу свойства 4) и учитывая соотношения

$\vec{i}\vec{j}=\vec{j}\vec{k}=\vec{k}\vec{i}=0$ и $\vec{i}\vec{i}=\vec{j}\vec{j}=\vec{k}\vec{k}=1$,

будем иметь

$\vec{a}\vec{b}=(x_1\vec{i}+y_1\vec{j}+z_1\vec{k})(x_2\vec{i}+y_2\vec{j}+z_2\vec{k})=x_1x_2+y_1y_2+z_1z_2$

Окончательно

<Formula description="(2)">

$\vec{a}\vec{b}=x_1x_2+y_1y_2+z_1z_2$

</Formula>

т.е. скалярное произведение векторов равно сумме произведений соответствующих координат этих векторов.

В частности, расстояние $d$ между двумя точками $A(x_1,y_1,z_1)$ и $B(x_2,y_2,z_2)$ можно рассматривать как длину
вектора $\overrightarrow{AB}=(x_2-x_1,y_2-y_1,z_2-z_1)$. Поэтому

<Formula description="">

$d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}$

</Formula>

Из формулы **(1)** угол между векторами $\vec{a}$ и $\vec{b}$ находится по формуле

<Formula description="">

$cos\phi=\cfrac{\vec{a}\vec{b}}{|\vec{a}||\vec{b}|}=\cfrac{x_1x_2+y_1y_2+z_1z_2}{\sqrt{x_1^2+y_1^2+z_1^2}\sqrt{x_2^2+y_2^2+z_2^2}}$

</Formula>

<Highlight color="#F4F6F6">

**Пример 1**.

Векторы $\vec{a}$ и $\vec{b}$ коллинеарны и $\vec{a}=(x_1,y_1,z_1)$, $\vec{b}=(x_2,y_2,z_2)$. Установить условие
коллинеарности этих векторов.

**Решение**

Если $\vec{a}||\vec{b}$, то $\vec{a}=\lambda\vec{b}$, где $\lambda$ - некоторое число или в координатной форме
$(x_1,y_1,z_1)=(\lambda x_2,\lambda y_2,\lambda z_2)$. Из равенства векторов следует

<Formula description="">

$x_1=\lambda x_2, y_1=\lambda y_2, z_1=\lambda z_2$

</Formula>

или

<Formula description="">

$\cfrac{x_1}{x_2}=\cfrac{y_1}{y_2}=\cfrac{z_1}{z_2}$

</Formula>

Таким образом, если векторы коллинеарны, то их соответствующие координаты пропорциональны (справедливо и обратное
утверждение).

</Highlight>

<Highlight color="#F4F6F6">

**Пример 2**.

Векторы $\vec{a}=(x_1,y_1,z_1)$, $\vec{b}=(x_2,y_2,z_2)$, перпендикулярны. Установить условие перпендикулярности этих
векторов.

**Решение**

Если $\vec{a}\perp\vec{b}$, то $\phi=\cfrac{\pi}{2}$ и, следовательно, $cos\phi=0$. Тогда согласно формулам (1) и (2)
имеем

<Formula description="">

$(\vec{a},\vec{b})=0$ или $x_1x_2+y_1y_2+z_1z_2=0$

</Formula>

Таким образом, если два вектора перпендикулярны, то их скалярное произведение равно нулю.

</Highlight>

<Highlight color="#F4F6F6">

**Пример 3**

Известно, что отрезок $AB$ точкой $M$ делится в отношении $\lambda$, т.е. $\cfrac{AM}{MB}=\lambda, \lambda>0$. Найти
координаты точки $M(x,y,z)$, если $A(x_1,y_1,z_1), B(x_2,y_2,z_2)$ (рис. 2).

<Figure description="Рис. 2"> 
<img src={useBaseUrl("/img/module-01/pic19.png")} /> 
</Figure>

**Решение**

Запишем отношение $\cfrac{AM}{MB}=\lambda$ в векторной форме вводя векторы $\overrightarrow{AM}$ и
$\overrightarrow{MB}$, $\overrightarrow{AM}=(x-x_1, y-y_1,z-z_1)$, $\overrightarrow{MB}=(x_2-x,y_2-y,z_2-z)$ или в
координатной форме

<Formula description="">

$(x-x_1,y-y_1,z-z_1)=(\lambda(x_2-x),\lambda(y_2-y),\lambda(z_2-z))$

</Formula>

Из равенства векторов следует равенство соответствующих координат

<Formula description="">

$x-x_1=\lambda(x_2-x), y-y_1=\lambda(y_2-y),z-z_1=\lambda(z_2-z)$

</Formula>

Откуда

<Formula description="(3)">

$x=\cfrac{x_1+\lambda x_2}{1+\lambda}, y=\cfrac{y_1+\lambda y_2}{1+\lambda}, z=\cfrac{z_1+\lambda z_2}{1+\lambda}$

</Formula>

Формулы (3) называются формулами деления отрезка в заданном отношении.

Если точка $M$ - середина отрезка $AB$, то $\lambda=1$ и формулы деления отрезка пополам запишутся

<Formula description="">

$x=\cfrac{x_1+x_2}{2}, y=\cfrac{y_1+y_2}{2}, z=\cfrac{z_1+z_2}{2}$

</Formula>

</Highlight>

Если одновременно с заданием трех векторов сказано, какой из них считается первым, какой вторым и какой третьим, то
говорят, что задана **упорядоченная тройка векторов**; впрочем, в дальнейшем, опуская прилагательное, мы будем говорить
просто: **тройка векторов**.

В тексте тройка векторов будет записываться в порядке нумерации; например, если мы пишем: $\vec{a} \vec{b} \vec{c}$, то
значит, $\vec{a}$ считается первым вектором, $\vec{b}$ – вторым, $\vec{c}$ – третьим; если мы пишем:
$\vec{b} \vec{c} \vec{a}$, то значит $\vec{b}$, считается первым вектором, вторым – $\vec{c}$, $\vec{a}$ – третьим.

Тройка некомпланарных векторов называется **правой (левой)**, если

1. С конца третьего вектора кратчайший поворот от первого вектора ко второму виден против часовой стрелки (по часовой
   стрелке).
2. Находясь внутри телесного угла, кратчайший поворот от первого вектора ко второму, от второго к третьему и от третьего
   к первому виден против часовой стрелки (по часовой стрелке).
3. Составляющие ее векторы располагаются в порядке нумерации аналогично тому, как расположены большой, указательный и
   средний пальцы правой (левой) руки.

Подробнее: тройка некомпланарных векторов называется правой, если ее третий вектор расположен относительно плоскости
первых двух с той же стороны, с какой расположится средний палец правой руки, большой палец которой направлен по первому
вектору тройки а указательный – по второму.

Тройки компланарных векторов не относятся ни к правым, ни к левым.

Пусть даны какие-нибудь некомпланарные векторы $\vec{a}, \vec{b}, \vec{c}$. Нумеруя их всеми различными способами, мы
получим шесть троек

1. $\vec{a}, \vec{b}, \vec{c}$;
2. $\vec{b}, \vec{c}, \vec{a}$;
3. $\vec{c}, \vec{a}, \vec{b}$;
4. $\vec{b}, \vec{a}, \vec{c}$;
5. $\vec{a}, \vec{c}, \vec{b}$;
6. $\vec{c}, \vec{b}, \vec{a}$.

Среди указанных шести троек имеются три правых и три левых.
