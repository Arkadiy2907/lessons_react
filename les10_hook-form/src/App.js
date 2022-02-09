import React from "react"
import { useForm } from "react-hook-form";


const App = () => {
    const {
        register,// метод регистрирующий поля для формы
        formState: {
            errors, //  для работы с ошибками
            isValid, // пока не устранятся ошибки кнопка сабмит не активна
        },

        handleSubmit,// обертка для работы с валидацией
        reset,// для очистки формы
    } = useForm({
        mode: "all" //режимы работы вывода ошибок при валидации
    })

    const onSubmit = (data) => {//срабатывает после валидации формы
        console.log(JSON.stringify(data))
        reset()// тут вызываем для очистки формы
    }

    return (
        <div className="App">
            <h1>react-hook-form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    First Name
                    <input
                        defaultValue="Misha"
                        {...register('firstName', {
                            required: "поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "мин 5 букв"
                            }
                        })}
                    />
                </label>
                <div style={{ height: 40 }}> {
                    errors.firstName && <p>{errors.firstName.message || "Error"}</p>
                }
                </div>
                <label>
                    Last Name
                    <input
                        defaultValue="Misha"
                        {...register('lastName', {
                            required: "поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "мин 5 букв"
                            }
                        })}
                    />
                </label>
                <div style={{ height: 40 }}> {
                    errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>
                }
                </div>
                <input type="submit" disabled={!isValid} />
            </form>
        </div>
    )
}

export default App;
