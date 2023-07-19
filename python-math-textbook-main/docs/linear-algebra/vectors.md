---
sidebar_position: 4
---

import Figure from '@components/Figure'

import Formula from '@components/Formula'

import Highlight from '@components/Highlight'

import useBaseUrl from '@docusaurus/useBaseUrl';

# Векторы

Обобщим известные из школьного курса геометрии сведения о векторах. Известно, что если на плоскости задана прямоугольная
декартовая система координат, то каждая точка $P$ плоскости однозначно характеризуется двумя числами $(x, y)$ -
_координатами точки_ $P$.

<Figure description="Рис. 1"> 
<img src={useBaseUrl("/img/module-01/pic01.png")} /> 
</Figure>

Аналогично, каждой точке $P$ трехмерного пространства (рис. 2) в заданной системе координат соответствует упорядоченная
тройка чисел $(x, y, z)$, называемая _координатами точки_ $P$.

<Figure description="Рис. 2"> 
<img src={useBaseUrl("/img/module-01/pic02.png")} /> 
</Figure>

При решении различных задач приходится рассматривать _направленный отрезок_, т.е. множество точек, лежащих между точками
$A$ и $B$ прямой с указанным направлением

<Figure description="Рис. 3"> 
<img src={useBaseUrl("/img/module-01/pic03.png")} /> 
</Figure>

Направление такого отрезка принято определять порядком задания точек $A$ и $B$: именно обозначают через
$\overrightarrow{AB}$ направленный отрезок с началом $A$ и концом $B$, направленный от начала $A$ и концу $B$. При этом
удобно не различать между собой два любых направленных отрезка, если они лежат на параллельных прямых, направленных в
одну сторону и имеют одинаковые длины, так как и с физической и с геометрической точки зрения они обозначают одно и
тоже.

_Вектором_ называют направленный отрезок $\overrightarrow{AB}$. Обозначают вектор так же как и направленный отрезок
$\overrightarrow{AB}$ или одной строчной буквой $\vec{a}$. _Нулевым вектором_ называют вектор у которого начало и конец
совпадают, обозначение $\vec{0}$ или просто $0$.

Расстояние между началом и концом вектора называется его _длиной_ (а также _модулем_ вектора) и обозначается
$\lvert\overrightarrow{AB}\rvert$ или $|\vec{a}|$. Вектор, длина которого равна единице, называется _единичным
вектором_.

Векторы называют _коллинеарными_, если они расположены на одной прямой или на параллельных прямых.

<Figure description="Рис. 4"> 
<img src={useBaseUrl("/img/module-01/pic04.png")} /> 
</Figure>

Векторы называют _компланарными_, если существует плоскость, которой они параллельны.

<Figure description="Рис. 5"> 
<img src={useBaseUrl("/img/module-01/pic05.png")} /> 
</Figure>

Два вектора $\overrightarrow{AB}$ и $\overrightarrow{OC}$ будем называть _равными_, если они коллинеарны, одинаково
направлены и имеют равные модули. Если направленный отрезок $\overrightarrow{AB}$ перенести параллельно самому себе, то
очевидно получится направленный отрезок, равный исходному (рис. 3). Всякий направленный отрезок $\overrightarrow{AB}$
можно перенести параллельно самому себе так, чтобы его начало совпало с началом координат. Понятно, что вектору
$\overrightarrow{AB}$ соответствует один и только один направленный отрезок $\overrightarrow{OC}$ с началом в начале
координат.

_Координатами вектора_ $\overrightarrow{AB}$ называются три числа $(x, y, z)$ - координаты точки $C$. Вектор с
координатами $(x, y, z)$ принято обозначать $\overrightarrow{AB}=(x, y, z)$. При этом числа $(x, y, z)$ называют
_проекциями вектора_ на соответствующей оси координат

Очевидно, что если $\overrightarrow{AB}=\overrightarrow{OC}=(x, y, z)$, то его модуль находится по формуле

$|\overrightarrow{AB}|=|\overrightarrow{OC}|=\sqrt{x^2+y^2+z^2}$

_Направление вектора_ определяется углами, которые он составляет с положительными направлениями соответствующих осей: с
осью $Ox$ - $\angle\alpha$, с $Oy$ - $\angle\beta$ , с $Oz$ - $\angle\gamma$ . Косинусы этих углов называют
направляющими косинусами вектора.

<Figure description="Рис. 6"> 
<img src={useBaseUrl("/img/module-01/pic06.png")} /> 
</Figure>

<Highlight color="#F4F6F6">

**Пример 1**

Задан двумерный вектор $\vec{a}=(x, y)$. Найти углы, образуемые этим вектором с положительным направлением
соответствующих осей координат и установить зависимость между направляющими косинусами этого вектора.

**Решение**

Находим модуль вектора $\overrightarrow{OC}=\vec{a}$

$|\vec{a}|=\sqrt{x^2+y^2}$

Из $\triangle CNO$ и $\triangle CMO$ (рис. 7) соответственно находим

<Figure description="Рис. 7"> 
<img src={useBaseUrl("/img/module-01/pic07.png")} /> 
</Figure>

$\cos\alpha = \cfrac{x}{|\vec{a}|}$ $\cos\beta = \cfrac{y}{|\vec{a}|}$

Тогда

$\cos^2\alpha + \cos^2\beta = \left(\cfrac{x}{|\vec{a}|}\right)^2 +  \left(\cfrac{y}{|\vec{a}|}\right)^2 = \cfrac{x^2 + y^2}{|\vec{a}|^2}$

и т.о. зависимость между направляющими косинусами двумерного вектора запишется

$\cos^2\alpha + \cos^2\beta = 1$

В случае трехмерного вектора эта зависимость имеет вид

$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$

</Highlight>

Если точка $A$ имеет координаты $(x_1, y_1, z_1)$, а точка $B$ координаты $(x_2, y_2, z_2)$, то вектор
$\overrightarrow{AB}$ имеет координаты $(x_2 - x_1, y_2 - y_1, z_2 - z_1)$ (см. рис.8).

<Figure description="Рис. 8"> 
<img src={useBaseUrl("/img/module-01/pic08.png")} /> 
</Figure>

_Суммой векторов_ $\overrightarrow{AB}$ и $\overrightarrow{CD}$ называется третий вектор $\overrightarrow{AD}$,
получаемый по _правилу треугольника_: складываемые векторы переносятся параллельно самим себе так, чтобы начало второго
вектора совпало с концом первого; тогда направленный отрезок, соединяющий начало первого вектора с концом второго и есть
$\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{CD}$.

<Figure description="Рис. 9"> 
<img src={useBaseUrl("/img/module-01/pic09.png")} /> 
</Figure>

Из определения действия сложения следует, что:

1. $\vec{a} + \vec{b} = \vec{b} + \vec{a}$ (свойство переместительности);
2. $(\vec{a} + \vec{b}) + \vec{c} = \vec{a} + (\vec{b} + \vec{c})$ (свойство сочетательности).

Для каждого вектора $\vec{a}=\overrightarrow{OA}$ существует _противоположный вектор_ $-\vec{a}=\overrightarrow{OA'}$,
имеющий ту же длину, но противоположное направление. Очевидно, что $\vec{a} + (-\vec{a})=0$, где $0$ &mdash;
нуль-вектор.

<Figure description="Рис. 10"> 
<img src={useBaseUrl("/img/module-01/pic10.png")} /> 
</Figure>

Из определения суммы векторов следует _правило параллелограмма_ для сложения двух векторов – сумма двух векторов
$\overrightarrow{OA}=\vec{a}$ и $\overrightarrow{OB}=\vec{b}$, приведенных к общему началу $0$, представляет собой
диагональ параллелограмма $OACB$, построенного на слагаемых векторах.

<Figure description="Рис. 11"> 
<img src={useBaseUrl("/img/module-01/pic11.png")} /> 
</Figure>

Аналогично определяется сумма нескольких векторов $\vec{a_1},\vec{a_2},\vec{a_3},...,\vec{a_n}$ . Строятся векторы
$\vec{a_1}'=\vec{a_1},\vec{a_2}'=\vec{a_2},...,\vec{a_n}'=\vec{a_n}$ так, чтобы начало вектора $\vec{a_2}'$ совпало с
концом вектора $\vec{a_1}'$ и т.д., начало вектора $\vec{a_n}'$ совпадало с концом вектора $\vec{a}_{n-1}'$. Тогда
вектор $\vec{S}$, начало которого совпадает с началом вектора $\vec{a_1}'$, а конец с концом вектора $\vec{a_n}'$ будем
называть суммой векторов $\vec{a_1}',\vec{a_2}',\vec{a_3}',...,\vec{a_n}'$.

<Figure description="Рис. 12"> 
<img src={useBaseUrl("/img/module-01/pic12.png")} /> 
</Figure>

Вычитание векторов определяется как операция, обратная сложению. Разностью векторов $\vec{a}$ и $\vec{b}$ называется
вектор $\vec{a} - \vec{b}$, который в сумме с вектором $\vec{b}$ дает вектор $\vec{a}$. В параллелограмме, построенном
на данных векторах $\vec{a}$ и $\vec{b}$ их разностью является соответственно направленная вторая диагональ
параллелограмма.

<Figure description="Рис. 13"> 
<img src={useBaseUrl("/img/module-01/pic13.png")} /> 
</Figure>

Для любых векторов $\vec{a}$ и $\vec{b}$ справедливо _неравенство треугольника_

$|\vec{a}+\vec{b}| \leq |\vec{a}| + |\vec{b}|$

Оно следует из того, что сумма двух сторон треугольника больше третьей стороны (рис. 14).

<Figure description="Рис. 14"> 
<img src={useBaseUrl("/img/module-01/pic14.png")} /> 
</Figure>

Произведением вектора $\vec{a}$ на число $k$ называется вектор $k\vec{a}$, модуль которого равен произведению модуля
вектора $\vec{a}$ на модуль числа $k$, а направление совпадает с направлением вектора $\vec{a}$, если $k>0$, и
противоположно направлению вектора $\vec{a}$, если $k<0$. При $k=0$ или $\vec{a}=0$ считают $k\vec{a}=0$.

<Figure description="Рис. 15"> 
<img src={useBaseUrl("/img/module-01/pic15.png")} /> 
</Figure>

Если векторы $\vec{a}$ и $\vec{b}$ коллинеарны и не равны нулю, то $\vec{a}=k\vec{b}$, $\vec{b}=\cfrac{1}{k}\vec{a}$.

Эта операция обладает свойствами:

1. $\lambda(\mu\vec{a}) = (\lambda\mu)\vec{a}$ (сочетательность);
2. $(\lambda + \mu)\vec{a} = \lambda\vec{a} + \mu\vec{a}$ (распределительность относительно чисел);
3. $\lambda(\vec{a} + \vec{b}) = \lambda\vec{a} + \lambda\vec{b}$ (распределительность относительно векторов).

_Проекцией точки_ $A$ на ось $l$ называется основание $A'$ перпендикуляра $AA'$, опущенного из точки $A$ на эту ось.

<Figure description="Рис. 16"> 
<img src={useBaseUrl("/img/module-01/pic16.png")} /> 
</Figure>

Под _компонентой_ (_составляющей_) вектора $\vec{a}=\overrightarrow{AB}$ относительно оси $l$ (рис. 16) понимается
вектор $\vec{a'}=\overrightarrow{A'B'}$, начало которого есть $A'$ проекция на ось $l$ начала вектора $\vec{a}$, а конец
которого $B'$ есть проекция на ось $l$ конца $B$ этого вектора.

Под проекцией вектора $\vec{a}$ на ось $l$ понимается скаляр $a_1=\pm|\overrightarrow{A'B'}|$, равный модулю его
компоненты $\vec{a'}$ относительно оси $l$, взятой со знаком плюс, если направление компоненты совпадает с направлением
оси $l$, и со знаком минус, если направление компоненты противоположно направлению оси $l$. Заметим, что если
$\vec{e}$ - единичный вектор оси $l$, то для компоненты $\vec{a'}$ справедливо равенство

$\vec{a'}=a_1\vec{e}$

Пусть вектор $\vec{a}=(a_x,a_y,a_z)$ задан своими проекциями на оси координат $O_x,O_y,O_z$.

Построим параллелепипед (рис. 17), диагональю которого является вектор $\vec{a}$, а ребрами служат его компоненты
$\vec{a_1}$, $\vec{a_2}$, $\vec{a_3}$ относительно координатных осей. Имеем разложение

<Formula description="(1)">

$\vec{a}=\vec{a_1}+\vec{a_2}+\vec{a_3}$

</Formula>

<Figure description="Рис. 17"> 
<img src={useBaseUrl("/img/module-01/pic17.png")} /> 
</Figure>

Если ввести единичные векторы $\vec{i}$, $\vec{j}$, $\vec{k}$ направленные по осям координат, то на основании
$\vec{a'}=a_1\vec{e}$ будем иметь

$\vec{a_1}=a_x\vec{i}$, $\vec{a_2}=a_y\vec{j}$, $\vec{a_3}=a_z\vec{k}$.

Подставляя эти выражения в равенство (1), получаем координатную форму вектора

$\vec{a}=a_x\vec{i}+a_y\vec{j}+a_z\vec{k}$

Если $\vec{b}=(b_x,b_y,b_z)$, то аналогично

$\vec{b}=b_x\vec{i} + b_y\vec{j} + b_z\vec{k}$

Теперь рассмотренные выше линейные операции над векторами можно записать в координатной форме:

$\lambda\vec{a}=\lambda a_x\vec{i} + \lambda a_y\vec{j} + \lambda a_z\vec{k}$

или

$\lambda\vec{a}=(\lambda a_x, \lambda a_y, \lambda a_z)$

т.е. при умножении вектора на скаляр координаты вектора умножаются на этот скаляр;

$\vec{a}\pm\vec{b}=(a_x \pm b_x)\vec{i} + (a_y \pm b_y)\vec{j} + (a_z \pm b_z)\vec{k}$

или

$\vec{a}\pm\vec{b}=(a_x \pm b_x, a_y \pm b_y, a_z \pm b_z)$

т.е. при сложении (или вычитании) векторов их одноименные координаты складываются (или вычитаются).