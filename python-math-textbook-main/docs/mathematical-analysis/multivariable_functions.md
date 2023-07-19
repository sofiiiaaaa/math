---
sidebar_position: 4
---

# Функции многих переменных

import Figure from '@components/Figure'

import Formula from '@components/Formula'

import Highlight from '@components/Highlight'

import useBaseUrl from '@docusaurus/useBaseUrl';

## Основные понятия. Граница, непрерывность

Пусть даны два непустых множества $D$ и $U$. Если каждой паре действительных чисел $(x, y)$, которые принадлежат
множеству $D$, по определенному правилу ставится в соответствие один и только один элемент $i$ из $U$, то говорят, что
на множестве $D$ задана функция $f$ (или отображение) с множеством значений $U$.

При этом пишут $D \xrightarrow{f} U$, или $f: D \longrightarrow U$. Множество $D$ называется областью определения
функции, а множество $U$, которое содержит все числа вида $f(x, y)$, где $(x, y) \in D$ &mdash; _множеством значений_
функции. Значение функции $u = f(x,y)$ в точке $M(x_0, y_0)$ обозначают $f(x_0, y_0)$ или $f(M)$.

Область определения функции $u = f(x,y)$ в самых простых случаях является или частью плоскости, ограниченную замкнутой
кривой (причем точки этой кривой - границы области могут принадлежать или не принадлежать области определения), или всей
плоскостью, или совокупностью нескольких частей плоскости $xOy$.

Геометрическим изображением функции $u = f(x,y)$ в прямоугольной системе координат есть некоторая поверхность.

Аналогично определяется функция любого числа переменных $u = f(x, y, z, \dots, t)$. В этом случае функцию
$u = f(x, y, z, \dots, t)$ называют **функцией нескольких переменных**.

_Линией уровня_ функции $u = f(x, y)$ называется линия $f(x,y)=C$ на плоскости $xOy$, в точках которой функция сохраняет
постоянное значение $u=C$.

_Поверхностью уровня_ функции $u = f(x, y, z)$ называется поверхность $f(x, y, z) = C$, в точках которой функция
сохраняет постоянное значение $u=C$.

**Пример 1**. Найти область определения функции $u=\sqrt{a^2-x^2-y^2}$.

_Решение_. Функция $u$ принимает действительные значения при условии, что $a^2-x^2-y^2 \ge 0$, или $x^2+y^2 \le a^2$, то
есть областью определения данной функции является окружность радиуса $a$ с центром в начале координат, включая граничную
окружность.

**Пример 2**. Найти линии уровня функции $u=x^2+y^2$.

_Решение_. Уравнение семейства линий уровня имеет вид $x^2+y^2=C \space (C>0)$. Давая $C$ разные действительные
значения, получим концентрические окружности с центром в начале координат.

**Пример 3**. Найти поверхности уровня функции $u=x^2+z^2-y^2$.

_Решение_. Уравнения семейства поверхностей уровня имеет вид $x^2+z^2-y^2=C$. Если $C=0$, то получаем $x^2+z^2-y^2=0$
&mdash; конус; если $C>0$, то $x^2+z^2-y^2=C$ &mdash; семейство однополостных гиперболоидов; если $C<0$, то
$x^2+z^2-y^2=0$ &mdash; семейство двополостных гиперболоидов.

## Частные производные и дифференциал функции

_Частной производной_ функции $z=f(x, y)$ по независимой переменной $x$ называется производная

$$
\cfrac{\partial z}{\partial x} =\lim_{\Delta x \to 0}\cfrac{f(x+\Delta x, y) - f(x, y)}{\Delta x}=f_{x}'(x, y)
$$

вычисленная при постоянной переменной $y$.

Частной производной функции $z=f(x, y)$ по независимой переменной $y$ называется производная

$$
\cfrac{\partial z}{\partial y} =\lim_{\Delta y \to 0}\cfrac{f(x, y + \Delta y) - f(x, y)}{\Delta y}=f_{y}'(x, y)
$$

вычисленная при постоянной переменной $x$.

Для частных производных справедливы обычные правила и формулы дифференцирования.

**Пример 1**. Для заданной функции $u=x^2-3xy-4y^2-x+2y+1$ найти $\cfrac{\partial u}{\partial x}$ и
$\cfrac{\partial u}{\partial y}$.

_Решение_. Рассматривая $y$ как постоянную величину, получим $\cfrac{\partial u}{\partial x} = 2x-3y-1$. Рассматривая
$x$ как постоянную, находим $\cfrac{\partial u}{\partial y} = -3x-8y+2$.

**Пример 2**. Для заданной функции $\rho=u^4\cos^2\phi$ найти $\cfrac{\partial \rho}{\partial u}$ и
$\cfrac{\partial \rho}{\partial \phi}$ .

_Решение_. Имеем

$$
\cfrac{\partial \rho}{\partial u} = 4u^3\cos^2\phi
$$

$$
\cfrac{\partial \rho}{\partial \phi} = u^4 \cdot \cos\phi(-\sin\phi)=-u^4\cdot\sin 2\phi
$$

**Пример 3**. Показать, что функция $z=y \ln(x^2-y^2)$ удовлетворяет уравнению
$\cfrac{1}{x}\cdot\cfrac{\partial z}{\partial x}+\cfrac{1}{y}\cdot\cfrac{\partial z}{\partial y}=\cfrac{z}{y^2}$.

_Решение_. Находим частные производные:

$$
\cfrac{\partial z}{\partial x} = \cfrac{2xy}{x^2-y^2}
$$

$$
\cfrac{\partial z}{\partial y} = \ln(x^2-y^2) - \cfrac{2y^2}{x^2-y^2}
$$

Подставляем полученные выражения в левую часть уравнения:

$$
\cfrac{1}{x}\cdot\cfrac{2xy}{x^2-y^2}+\cfrac{1}{y}\cdot\Bigg[\ln(x^2-y^2) - \cfrac{2y^2}{x^2-y^2}\Bigg]=\cfrac{2y}{x^2-y^2}-\cfrac{2y}{x^2-y^2}+\cfrac{\ln(x^2-y^2)}{y}=\cfrac{z}{y^2}
$$

## Полный дифференциал

_Полным приращением_ функции $z=f(x,y)$ в точке $M(x,y)$ называется разница
$\Delta z = f(x + \Delta x, y + \Delta y) - f(x,y)$, где $\Delta x$ и $\Delta y$ &mdash; произвольные приращения
аргументов.

Функция $z=f(x,y)$ называется _дифференцируемой_ в точке $(x,y)$, если в этой точке полное приращение можно представить
в виде

$$
\Delta z = A \Delta x + B \Delta y + \omicron(\rho)
$$

где $\rho = \sqrt{\Delta x^2 + \Delta y^2}$

_Полным дифференциалом_ функции $z=f(x,y)$ называется главная часть полного приращения $\Delta z$, линейная относительно
приращений аргументов $\Delta x$ и $\Delta y$, то есть $dz = A \Delta x + B \Delta y$.

Дифференциалы независимых переменных совпадают с их приращениями, то есть $dx = \Delta x$ и $dy = \Delta y$.

Полный дифференциал функции $z=f(x,y)$ вычисляется по формуле

$$
dz=\cfrac{\partial z}{\partial x}dx + \cfrac{\partial z}{\partial y}dy
$$

Аналогично, полный дифференциал функции трех аргументов $u=f(x, y, z)$ вычисляется по формуле

$$
du=\cfrac{\partial u}{\partial x}dx + \cfrac{\partial u}{\partial y}dy + \cfrac{\partial u}{\partial z}dz
$$

При достаточно малом $\rho = \sqrt{\Delta x^2 + \Delta y^2}$ для дифференцируемой функции $z=f(x,y)$ справедливы
приближенные равенства

$$
\Delta z \thickapprox dz; \space f(x + \Delta x, y + \Delta y) \thickapprox f(x, y) + dz
$$

**Пример 1**. Для функции $z=\arctg\cfrac{x+y}{x-y}$ найти $dz$.

_Решение_. Найдем частные производные:

$$
\cfrac{\partial z}{\partial x}=\cfrac{1}{1+\Big(\cfrac{x+y}{x-y}\Big)^2}\cdot \cfrac{-2y}{(x-y)^2}=-\cfrac{y}{x^2+y^2}
$$

$$
\cfrac{\partial z}{\partial y}=\cfrac{1}{1+\Big(\cfrac{x+y}{x-y}\Big)^2}\cdot \cfrac{2x}{(x-y)^2}=\cfrac{x}{x^2+y^2}
$$

Значит,

$$
dz=\cfrac{\partial z}{\partial x}dx + \cfrac{\partial z}{\partial y}dy=\cfrac{xdy-ydx}{x^2+y^2}
$$

**Пример 2**. Для функции $u=x^{y^2z}$ найти $du$.

_Решение_. Имеем
$du=\cfrac{\partial u}{\partial x}dx + \cfrac{\partial u}{\partial y}dy + \cfrac{\partial u}{\partial z}dz$, где

$$
\cfrac{\partial u}{\partial x}=y^2z\cdot x^{y^2z-1}
$$

$$
\cfrac{\partial u}{\partial y}=x^{y^2z}\cdot \ln x \cdot 2yz
$$

$$
\cfrac{\partial u}{\partial z}=x^{y^2z}\cdot \ln x \cdot y^2
$$

Значит,

$$
du=y^2z\cdot x^{y^2z-1}dx + 2yz\cdot x^{y^2z}\cdot\ln x dy + y^2x^{y^2z}\cdot ln x dz
$$

**Пример 3**. Вычислить приблизительно $\arctg(1.02/0.95)$, исходя из значения функции $z=\arctg(y/x)$ при $x=1$, $y=1$.

_Решение_. Значение функции $z$ при $x=1$, $y=1$ равно $z=\arctg(1/1)=\pi/4 \cong 0.785$. Найдем приращение функции
$\Delta z$ при $\Delta x = -0.05$, $\Delta y = 0.02$:

$$
\Delta z \thickapprox dz = \cfrac{\partial z}{\partial x} \Delta x + \cfrac{\partial z}{\partial y} \Delta y = - \cfrac{y\Delta x}{x^2+y^2} + \cfrac{x\Delta y}{x^2+y^2} = \cfrac{x\Delta y - y\Delta x}{x^2+y^2}=\cfrac{1\cdot 0.02 + 1 \cdot 0.05}{2}=0.035
$$

Значит, $\arctg(1.02/0.95)=z + \Delta z \thickapprox 0.785 + 0.035 = 0.82$.

## Частные производные и дифференциал высших порядков

_Частными производными второго порядка_ функции $z=f(x, y)$ называются частные производные от ее частных производных
первого порядка.

Обозначения частных производных второго порядка:

$$
\cfrac{\partial}{\partial x}\left(\cfrac{\partial z}{\partial x}\right)=\cfrac{\partial^2 z}{\partial x^2}=f''_{xx}(x, y)
$$

$$
\cfrac{\partial}{\partial y}\left(\cfrac{\partial z}{\partial x}\right)=\cfrac{\partial^2 z}{\partial x \partial y}=f''_{xy}(x, y)
$$

$$
\cfrac{\partial}{\partial x}\left(\cfrac{\partial z}{\partial y}\right)=\cfrac{\partial^2 z}{\partial y \partial x}=f''_{yx}(x, y)
$$

$$
\cfrac{\partial}{\partial y}\left(\cfrac{\partial z}{\partial y}\right)=\cfrac{\partial^2 z}{\partial y^2}=f''_{yy}(x, y)
$$

Аналогично определяются и обозначаются частные производные третьего и высших порядков, например:

$$
\cfrac{\partial}{\partial x}\left(\cfrac{\partial^2 z}{\partial x^2}\right)=\cfrac{\partial^3 z}{\partial x^3}=f'''_{xxx}(x, y)
$$

$$
\cfrac{\partial}{\partial y}\left(\cfrac{\partial^2 z}{\partial x^2}\right)=\cfrac{\partial^3 z}{\partial x^2 \partial y}=f'''_{xxy}(x, y)
$$

$$
\cdots
$$

Так называемые "смешанные" производные, которые отличаются друг от друга только последовательностью дифференцирования,
равны между собой, если они непрерывны, например:
$\cfrac{\partial^2 z}{\partial x \partial y}=\cfrac{\partial^2 z}{\partial y \partial x}$.

_Дифференциалом второго порядка_ функции $z=f(x,y)$ называется дифференциал от ее полного дифференциала, то есть
$d^2z=d(dz)$.

Аналогично определяются дифференциалы третьего и высших порядков: $d^3z=d(d^2z)$; $d^nz=d(d^{n-1}z)$.

Если $x$ и $y$ &mdash; независимые переменные и функция $f(x, y)$ имеет непрерывные частные производные, то
дифференциалы высших порядков вычисляются по формулам:

$$
d^2z=\cfrac{\partial^2z}{\partial x^2}dx^2+2\cfrac{\partial^2z}{\partial x \partial y}dxdy + \cfrac{\partial^2z}{\partial y^2}dy^2
$$

$$
d^3z=\cfrac{\partial^3z}{\partial x^3}dx^3+3\cfrac{\partial^3z}{\partial x^2 \partial y}dx^2dy + 3\cfrac{\partial^3z}{\partial x \partial y^2}dxdy^2 + \cfrac{\partial^3z}{\partial y^3}dy^3
$$

вообще, имеет место общая формула

$$
d^n=\left(\cfrac{\partial}{\partial x}dx + \cfrac{\partial}{\partial y}dy\right)^nz
$$

которая формально раскрывается по биноминальному закону.

**Пример 1**. Для функции $z=y\ln x$ найти $\cfrac{\partial^2 z}{\partial x^2}$,
$\cfrac{\partial^2 z}{\partial x \partial y}$, $\cfrac{\partial^2 z}{\partial y^2}$.

_Решение_. Находим частные производные:

$$
\cfrac{\partial z}{\partial x} = \cfrac{y}{x}; \space \cfrac{\partial z}{\partial y} = \ln x
$$

Дифференцируя повторно, получаем

$$
\cfrac{\partial^2 z}{\partial x^2}=\cfrac{\partial}{\partial x}\left(\cfrac{y}{x}\right)=-\cfrac{y}{x^2}
$$

$$
\cfrac{\partial^2 z}{\partial y^2}=\cfrac{\partial}{\partial y}\left(\ln{x}\right)=0
$$

$$
\cfrac{\partial^2 z}{\partial x \partial y}=\cfrac{\partial}{\partial y}\left(\cfrac{y}{x}\right)=\cfrac{1}{x}
$$

**Пример2**. Для функции $z=\sin{x}\sin{y}$ найти $d^2z$.

_Решение_. Частные производные первого порядка заданной функции имеют вид:

$$
\cfrac{\partial z}{\partial x}=\cos{x}\sin{y}; \space \cfrac{\partial z}{\partial y}=\sin{x}\cos{y}
$$

Дифференцируем повторно:

$$
\cfrac{\partial^2 z}{\partial x^2}=-\sin{x}\sin{y}
$$

$$
\cfrac{\partial^2 z}{\partial x \partial y}=\cos{x}\cos{y}
$$

$$
\cfrac{\partial^2 z}{\partial y^2}=-\sin{x}\sin{y}
$$

$$
d^2z=-\sin{x}\sin{y}dx^2+2\cos{x}\cos{y}dxdy-\sin{x}\sin{y}dy^2
$$

## Дифференцирование сложных функций

Пусть $z=f(x, y)$, где $x=\varphi(t)$, $y=\psi(t)$ и функции $f(x, y)$, $\varphi(t)$, $\psi(t)$ дифференцируемые.

Тогда производная сложной функции $z=f[\varphi(t), \psi(t)]$ вычисляется по формуле

$$
\cfrac{dz}{dt}=\cfrac{\partial z}{\partial x}\cdot\cfrac{dx}{dt}+\cfrac{\partial z}{\partial y}\cdot\cfrac{dy}{dt}
$$

Если $z=f(x, y)$, где $y=\psi(t)$, то _полная производная_ от $z$ по $x$ находится по формуле

$$
\cfrac{dz}{dx}=\cfrac{\partial z}{\partial x}+\cfrac{\partial z}{\partial y}\cdot\cfrac{dy}{dx}
$$

Если же $z=f(x, y)$, где $x=\varphi(\xi,\eta)$, $y=\psi(\xi,\eta)$ , то частные производные выражаются следующим
образом:

$$
\cfrac{\partial z}{\partial \xi}=\cfrac{\partial z}{\partial x}\cdot\cfrac{\partial x}{\partial \xi}+\cfrac{\partial z}{\partial y}\cdot\cfrac{\partial y}{\partial \xi}
$$

$$
\cfrac{\partial z}{\partial \eta}=\cfrac{\partial z}{\partial x}\cdot\cfrac{\partial x}{\partial \eta}+\cfrac{\partial z}{\partial y}\cdot\cfrac{\partial y}{\partial \eta}
$$

**Пример 1**. Для функции $z=e^{x^2+y^2}$, где $x=a\cos t$, $y=a\sin t$ найти $\cfrac{dz}{dt}$.

_Решение_. Имеем

$$
\cfrac{dz}{dt}=\cfrac{\partial z}{\partial x}\cdot\cfrac{dx}{dt}+\cfrac{\partial z}{\partial y}\cdot\cfrac{dy}{dt}=e^{x^2+y^2}\cdot 2x(-a\sin t) + e^{x^2+y^2} \cdot 2y(a\cos t)=2ae^{x^2+y^2}(y\cos t - x \sin t)
$$

Выразив $x$ и $y$ через $t$, получим

$$
\cfrac{dz}{dt}=2ae^{a^2}(a\sin t\cos t - a \cos t \sin t)=0
$$

**Пример 2**. Для функции $z=\ln (x^2-y^2)$, где $y=e^x$ найти $\cfrac{\partial z}{\partial x}$, $\cfrac{dz}{dx}$.

_Решение_. Имеем $\cfrac{\partial z}{\partial x}=\cfrac{2x}{x^2-y^2}$. Используя формулу полной производной, находим

$$
\cfrac{dz}{dx}=\cfrac{\partial z}{\partial x}+\cfrac{\partial z}{\partial y}\cdot\cfrac{dy}{dx}=\cfrac{2x}{x^2-y^2} - \cfrac{2ye^x}{x^2-y^2}=\cfrac{2(x-ye^x)}{x^2-y^2}
$$

## Экстремум функции нескольких переменных

Функция $z=f(x,y)$ имеет _максимум_ (_минимум_) в точке $M_0(x_0,y_0)$, если значение функции в этой точке больше
(меньше), чем ее значение в любой другой точке $M(x,y)$ некоторой окрестности точки $M_0$, то есть $f(x_0,y_0)>f(x,y)$
[соответственно $f(x_0,y_0)<f(x,y)$] для всех точек $M(x,y)$, которые удовлетворяют условию $|M_0-M| < \delta$, где
$\delta$ &mdash; достаточно малое положительное число.

Максимум или минимуму функции называется ее _экстремумом_. Точка $M_0$, в которой функция имеет экстремум, называется
_точкой экстремума_.

_Если дифференцируемая функция $z=f(x,y)$ достигает экстремума в точке $M_0(x_0,y_0)$, то ее частные производные первого
порядка в этой точке равны нулю_, то есть

$$
\cfrac{\partial f(x_0,y_0)}{\partial x}=0, \space \cfrac{\partial f(x_0,y_0)}{\partial y}=0
$$

**Это необходимые условия экстремума!**

Точки, в которых частные производные равны нулю, называются _стационарными точками_. Не всякая стационарная точка
является точкой экстремума.

Пусть $M_0(x_0,y_0)$ &mdash; стационарная точка функции $z=f(x,y)$.

Обозначим

$$
A=\cfrac{\partial^2 f(x_0,y_0)}{\partial x^2}, \space B=\cfrac{\partial^2 f(x_0,y_0)}{\partial x \partial y}, \space C=\cfrac{\partial^2 f(x_0,y_0)}{\partial y^2}
$$

и составим дискриминант $\Delta = AC-B^2$. Тогда:

- если $\Delta > 0$, то функция имеет в точке $M_0$ экстремум, а именно максимум при $A < 0$ (или $C < 0$) и минимум при
  $A > 0$ (или $C > 0$);
- если $\Delta < 0$, то в точке $M_0$ экстремума нет (достаточные условия существования или отсутствия экстремума);
- если $\Delta = 0$, то необходимо дальнейшее исследование (сомнительный случай)

**Пример 1**. Найти экстремум функции $z=x^2+xy+y^2-3x-6y$.

_Решение_. Находим частные производные первого порядка:

$$
\cfrac{\partial z}{\partial x}=2x+y-3, \space \cfrac{\partial z}{\partial y}=x+2y-6
$$

Воспользовавшись необходимыми условиями экстремума, находим стационарные точки:

$$
\begin{cases}
   2x+y-3=0 \\
   x+2y-6=0
\end{cases}
$$

Решив систему, получаем $x = 0$, $y = 3$; то есть $M(0; 3)$.

Находим значения частных производных второго порядка в точке $M$,

$$
\cfrac{\partial^2 z}{\partial x^2}=2, \space \cfrac{\partial^2 z}{\partial y^2}=2, \space \cfrac{\partial^2 z}{\partial x \partial y}=1
$$

и составляем дискриминант: $\Delta = AC - B^2 = 2 \cdot 2 - 1 = 3 > 0$.

Значит, в точке $M(0; 3)$ заданная функция имеет минимум. Значение функции в этой точке $z_{min}=-9$.

## Условный экстремум. Наибольшее и наименьшее значения функции в замкнутой области

_Условным экстремумом_ функции $z=f(x,y)$ называется экстремум этой функции, достигнутый при условии, что переменные $x$
и $y$ связаны уравнением $\varphi (x,y)$ &mdash; _уравнение связи_.

Нахождение условного экстремума можно свести к исследованию на обыкновенный экстремум так называемой _функции Лагранжа_

$$
u=f(x,y)+\lambda \varphi(x,y)
$$

где $\lambda$ &mdash; неопределенный постоянный множитель

Необходимые условия экстремума функции Лагранжа имеют вид

$$
\begin{cases}
   \dfrac{\partial u}{\partial x} = \dfrac{\partial f}{\partial x} +\lambda \dfrac{\partial \varphi}{\partial x} = 0\\
   \\
   \dfrac{\partial u}{\partial y} = \dfrac{\partial f}{\partial y} +\lambda \dfrac{\partial \varphi}{\partial y} = 0\\
   \\
   \varphi(x,y)=0
\end{cases}
$$

С этой системы трех уравнений можно найти неизвестные $x$, $y$ и $\lambda$.

Для того, чтобы найти _наибольшее_ и _наименьшее_ значения функции в замкнутой области, нужно:

1. найти стационарные точки, расположенные в данной области, и вычислить значения функции в этих точках;
2. найти наибольшее и наименьшее значения функции на линиях, которые являются границей области;
3. из всех найденных значений выбрать наибольшее и наименьшее.

**Пример 1**. Найти экстремум функции $z=xy$ при условии, что $x$ и $y$ связаны уравнением $2x+3y-5=0$.

_Решение_. Рассмотрим функцию Лагранжа $u=xy+\lambda(2x+3y-5)$. Имеем $\dfrac{\partial u}{\partial x}=y + 2 \lambda$,
$\dfrac{\partial u}{\partial y}=x + 3 \lambda$.

Из системы уравнений (необходимые условия экстремума)

$$
\begin{cases}
   y+2\lambda = 0\\
   x + 3\lambda = 0\\
   2x+3y-5=0
\end{cases}
$$

находим, что $\lambda = -5/12$, $x = 5/4$, $y = 5/6$.

Легко определить, что в точке $(5/4; 5/6)$ функция $z=xy$ достигает наибольшего значения $z_{max}=25/24$.

**Пример 2**. Из всех прямоугольных треугольников с заданной площадью $S$ найти такой, гипотенуза которого имеет
наименьшее значение.

_Решение_. Пусть $x$ и $y$ &mdash; катеты, а $z$ &mdash; гипотенуза треугольника. Так как $z^2=x^2+y^2$, то задача
сводится к нахождению наименьшего значения функции $x^2+y^2$ при условии, что $x$ и $y$ связаны уравнением $xy/2=S$, то
есть $xy-2S=0$.

Рассмотрим функцию $u=x^2+y^2-\lambda(xy-2S)$ и найдем ее частные производные

$$
\dfrac{\partial u}{\partial x} = 2x+\lambda y, \space \dfrac{\partial u}{\partial y} = 2y+\lambda x
$$

Так как $x>0$, $y>0$, то из системы уравнений

$$
\begin{cases}
   2x+\lambda y = 0\\
   2y + \lambda x = 0\\
   xy/2=S
\end{cases}
$$

получаем решение $\lambda = -2$, $x = y = \sqrt{2S}$.

Таким образом, гипотенуза имеет наименьшее значение, если катеты треугольника равны между собой.

## Производная в заданном направлении. Градиент функции

Производной функции $z=f(x,y)$ в точке $M(x,y)$ в направлении вектора $I = \overline{MM_1}$ называется предел

$$
\dfrac{\partial z}{\partial l}=\lim\limits_{|MM_1| \to 0}\dfrac{f(M_1)-f(M)}{|MM_1|}=\lim\limits_{\rho \to 0}\dfrac{\Delta z}{\rho}
$$

где $\rho=\sqrt{\Delta x^2 + \Delta y^2}$.

Если функция $f(x,y)$ дифференцируемая, то производная в заданном направлении находится по формуле

$$
\dfrac{\partial z}{\partial l}=\dfrac{\partial z}{\partial x}\cos\alpha + \dfrac{\partial z}{\partial y}\sin\alpha
$$

где $\alpha$ &mdash; угол, образованный вектором $I$ с осью $Ox$.

В случае функции трех переменных $u=f(x,y,z)$ производная в заданном направлении определяется аналогично.
Соответствующая формула имеет вид

$$
\dfrac{\partial z}{\partial l}=\dfrac{\partial u}{\partial x}\cos\alpha + \dfrac{\partial u}{\partial y}\cos\beta + \dfrac{\partial u}{\partial z}\cos\gamma
$$

где $\cos\alpha, \cos\beta, \cos\gamma$ &mdash; направляющие косинусы вектора $I$.

Градиентом функции $z=f(x,y)$ в точке $M(x,y)$ называется вектор, выходящий из точки $M$, координаты которого равны
частным производным по соответствующим аргументам функции $z$:

$$
\nabla z = \dfrac{\partial z}{\partial x}\vec{i} + \dfrac{\partial z}{\partial y}\vec{j}
$$

Градиент указывает направление наискорейшего роста функции в данной точке. Производная $\dfrac{\partial z}{\partial l}$
в направлении градиента имеет наибольшее значение, равное

$$
\Big(\dfrac{\partial z}{\partial l}\Big)_{max}=|\nabla z|=\sqrt{\Big(\dfrac{\partial z}{\partial x}\Big)^2 +\Big(\dfrac{\partial z}{\partial y}\Big)^2}
$$

В случае функции $u=f(x,y,z)$ градиент функции равен

$$
\nabla u = \dfrac{\partial u}{\partial x}\vec{i} + \dfrac{\partial u}{\partial y}\vec{j}+ \dfrac{\partial u}{\partial z}\vec{k}
$$

**Пример 1**. Найти производную функции $z=x^2-y^2$ в точке $M(1,1)$ в направлении вектора $I$, который составляет угол
$\alpha = 60^{\circ}$ с положительным направлением оси $Ox$.

_Решение_. Найдем значения частных производных в точке $M$:

$$
\dfrac{\partial z}{\partial x}=2x, \space \dfrac{\partial z}{\partial y}=-2y, \space \Big(\dfrac{\partial z}{\partial x}\Big)_M=2, \space \Big(\dfrac{\partial z}{\partial y}\Big)_M=-2
$$

Так как $\cos\alpha=\cos 60^{\circ}=1/2$, $\sin\alpha=\sin 60^{\circ}=\sqrt{3}/2$, то

$$
\dfrac{\partial z}{\partial l}=2 \cdot \dfrac{1}{2} - \dfrac{\sqrt{3}}{2}=1-\sqrt{3} \approx -0.7
$$

**Пример 2**. Найти производную функции $z=\ln(x^2+y^2)$ в точке $M(3,4)$ в направлении градиента функции $z$.

_Решение_. Тут вектор $I$ совпадает с градиентом функции $z=\ln(x^2+y^2)$ в точке $M(3,4)$ и равен

$$
\nabla z = \Big(\dfrac{2x}{x^2+y^2}\Big)_M\vec{i} + \Big(\dfrac{2y}{x^2+y^2}\Big)_M\vec{j}
$$

Значит

$$
\dfrac{\partial z}{\partial l} = |\nabla z| = \sqrt{\Bigg(\dfrac{6}{25}\Bigg)^2 + \Bigg(\dfrac{8}{25}\Bigg)^2} = \dfrac{2}{5}
$$

## Дифференцирование неявных функций

Производная неявной функции $y=y(x)$ заданной уравнением $F(x,y)=0$, где $F(x,y)$ &mdash; дифференцируемая функция
переменных $x$ и $y$, может быть вычислена по формуле

$$
y'=-\dfrac{\dfrac{\partial F}{\partial x}}{\dfrac{\partial F}{\partial y}}
$$

при условии, что $\dfrac{\partial F}{\partial y} \ne 0$.

Производные высших порядков неявной функции можно найти последовательным дифференцированием данной формулы, рассматривая
при этом $y$ как функцию от $x$.

Аналогично, частные производные неявной функции двух переменных $z=\varphi(x,y)$ заданной с помощью уравнения
$F(x,y,z)=0$, где $F(x,y,z)$ &mdash; дифференцируемая функция переменных $x$, $y$ и $z$, могут быть вычислены по
формулам

$$
\dfrac{\partial z}{\partial x}=-\dfrac{\dfrac{\partial F}{\partial x}}{\dfrac{\partial F}{\partial z}}, \space \dfrac{\partial z}{\partial y}=-\dfrac{\dfrac{\partial F}{\partial y}}{\dfrac{\partial F}{\partial z}}
$$

при условии, что $\dfrac{\partial F}{\partial z} \ne 0$.

**Пример 1**. Для функции $y-\sin y = x$ найти $y'$ и $y''$

_Решение_. Тут $F(x,y)=y-\sin y - x$. Находим частные производные:

$$
\dfrac{\partial F}{\partial x}= -1, \space \dfrac{\partial F}{\partial y}=1-\cos y = 2\sin^2\dfrac{y}{2}
$$

отсюда

$$
y'=-\dfrac{-1}{2\sin^2\dfrac{y}{2}}=\dfrac{1}{2}\cosec^2\dfrac{y}{2}
$$

Найдем вторую производную: .

$$
y''=\dfrac{1}{2}\cdot 2 \cosec\dfrac{y}{2}\Big(-\cosec\dfrac{y}{2}\cdot \ctg \dfrac{y}{2}\Big)\cdot \dfrac{1}{2}y'=-\dfrac{1}{4}\cosec^4\dfrac{y}{2}\cdot \ctg \dfrac{y}{2}
$$

**Пример 2**. Для функции $z^3-3xyz=a^3$ найти $\dfrac{\partial z}{\partial x}$, $\dfrac{\partial z}{\partial y}$.

_Решение_. Тут $F(x,y,z)= z^3-3xyz - a^3$. Находим частные производные:

$$
\dfrac{\partial F}{\partial x} = -3yz, \dfrac{\partial F}{\partial y}=-3xz
$$

Тогда

$$
\dfrac{\partial z}{\partial x} = -\dfrac{-3yz}{3z^2-3xy}=\dfrac{yz}{z^2-xy}, \space \dfrac{\partial z}{\partial y}=-\dfrac{-3xz}{3z^2-3xy}=\dfrac{xz}{z^2-xy}
$$

**Пример 3**. Для функции $xyz = x + y + z$ найти $dz$.

_Решение_. Известно, что $dz=\dfrac{\partial z}{\partial x}dx + \dfrac{\partial z}{\partial y}dy$, поэтому найдем
сначала $\dfrac{\partial z}{\partial x}$ и $\dfrac{\partial z}{\partial y}$:

$$
\dfrac{\partial z}{\partial x}=-\dfrac{yz-1}{xy-1}, \space \dfrac{\partial z}{\partial y}=-\dfrac{xz-1}{xy-1}
$$

Значит, .

$$
dz = - \dfrac{1}{xy-1}[(yz-1)dx+(xz-1)dy]
$$

## Касательная плоскость и нормаль к поверхности

_Касательной плоскостью_ к поверхности в точке $M$ называется плоскость, которая содержит все касательные к кривым,
проведенным на поверхности через точку $M$.

_Нормалью_ к поверхности называется прямая, проходящая через точку касания $M$ и перпендикулярная касательной плоскости.

Если поверхность задана уравнением $F(x,y,z)=0$, то уравнение касательной плоскости в точке $M(x_0,y_0,z_0)$ поверхности
имеет вид

$$
\Bigg(\dfrac{\partial F}{\partial x}\Bigg)_M(x-x_0) + \Bigg(\dfrac{\partial F}{\partial y}\Bigg)_M(y-y_0) + \Bigg(\dfrac{\partial F}{\partial z}\Bigg)_M(z-z_0)=0
$$

где $\Bigg(\dfrac{\partial F}{\partial x}\Bigg)_M$, $\Bigg(\dfrac{\partial F}{\partial y}\Bigg)_M$,
$\Bigg(\dfrac{\partial F}{\partial z}\Bigg)_M$ &mdash; значения частных производных в точке $M$, а $x$, $y$, $z$ &mdash;
текущие координаты точки касательной плоскости.

Уравнение нормали к поверхности в точке $M$ имеет вид

$$
\dfrac{(x-x_0)}{\Bigg(\dfrac{\partial F}{\partial x}\Bigg)_M}=\dfrac{(y-y_0)}{\Bigg(\dfrac{\partial F}{\partial y}\Bigg)_M}=\dfrac{(z-z_0)}{\Bigg(\dfrac{\partial F}{\partial z}\Bigg)_M}
$$

Тут $x$, $y$, $z$ &mdash; текущие координаты точки нормали.

Если же уравнение поверхности задано в явном виде $z=f(x,y)$, то уравнение касательной плоскости в точке
$M(x_0,y_0,z_0)$ имеет вид

$$
(z-z_0)=\Bigg(\dfrac{\partial F}{\partial x}\Bigg)_M(x-x_0) + \Bigg(\dfrac{\partial F}{\partial y}\Bigg)_M(y-y_0)
$$

а уравнение нормали:

$$
\dfrac{(x-x_0)}{\Bigg(\dfrac{\partial F}{\partial x}\Bigg)_M}=\dfrac{(y-y_0)}{\Bigg(\dfrac{\partial F}{\partial y}\Bigg)_M}=\dfrac{(z-z_0)}{-1}
$$

**Пример 1**. Задана поверхность $z=x^2-2xy+y^2-x+2y$. Составить уравнение касательной плоскости и уравнение нормали к
поверхности в точке $M(1;1;1)$.

_Решение_. Найдем частные производные:

$$
\dfrac{\partial z}{\partial x} = 2x - 2y - 1, \space \dfrac{\partial z}{\partial y} = -2x + 2y + 2
$$

Их значения в точке $M(1;1;1)$ равны: $\Bigg(\dfrac{\partial z}{\partial x}\Bigg)_M=-1$,
$\Bigg(\dfrac{\partial z}{\partial y}\Bigg)_M=2$.

Уравнение касательной плоскости:

$$
z-1=-(x-1)+2(y-1), \space x-2y+z=0
$$

Уравнение нормали:

$$
\dfrac{(x-1)}{(-1)}=\dfrac{(y-1)}{2}=\dfrac{(z-1)}{(-1)}
$$

**Пример 2**. К поверхности $x^2+2y^2+3z^2=11$ провести касательные плоскости, параллельные плоскости $x+y+z=1$.

_Решение_. Тут $F(x,y,z)=x^2+2y^2+3z^2-11$. Находим частные производные:

$$
\dfrac{\partial F}{\partial x}=2x, \space \dfrac{\partial F}{\partial y}=4y, \space \dfrac{\partial F}{\partial z}=6z
$$

С условия параллельности касательной плоскости и данной плоскости следует, что
$\dfrac{\partial F}{\partial x}/1=\dfrac{\partial F}{\partial y}/1=\dfrac{\partial F}{\partial z}/1$, или
$(2x)/1=(4y)/1=(6z)/1$.

Добавив к этим уравнениям уравнение поверхности $x^2+2y^2+3z^2=11$, найдем координаты точек касания:
$M_1(\sqrt{6};\sqrt{6}/2;\sqrt{6}/3)$ и $M_2(-\sqrt{6};-\sqrt{6}/2;-\sqrt{6}/3)$.

Значит, уравнения касательных плоскостей имеют вид

$$
1\cdot(x \pm \sqrt{6}) + 1 \cdot (y \pm \sqrt{6}/2) + 1 \cdot (z \pm \sqrt{6}/3) = 0
$$

т. е.

$$
x+y+z+11/\sqrt{6}=0 \space \text{и} \space x+y+z-11/\sqrt{6}=0
$$
