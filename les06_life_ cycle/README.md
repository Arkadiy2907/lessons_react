Жизненный цикл компонента - простой разбор

ClassCycle
constructor срабатывает только один раз и записав туда props при изменениях в props изменений уже не будет(тут при перерисовке уже не отслеживается изменения стэйт после 1-й отрисовки)(строка 11)

getDerivedStateFromProps(принимает пропсы и состояние а возвращает либо новые стэйт, либо null если ни чего не изменилось)
потому ввели метод (жизненный цикл) отслеживающий --при перерисовке компонента а не изменились ли стэйты (строка 24 потому тут count берется не из val++)(это метод запускается всегда при перерисовке)

componentDidMount -запускается когда компонент был веведен и закончил отрисовку, он запускается только 1 раз и не работает при обновлении -- предназначен для передачи данных после окончательной отрисовки компонета только при ПЕРВОЙ отрисовки

componentDidUpdate  -- предназначен для передачи данных после окончательной отрисовки компонета только при ПОСЛЕДУЮЩИХ отрисовки


FuncCycle

useEffect -принимает ф-ю которая срабатывает каждый раз при обновлении компонета после его  отрисовки

