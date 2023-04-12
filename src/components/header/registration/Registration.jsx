import React from 'react'
import { Typography, Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import c from './registration.module.scss'



const CssTextField = styled(TextField)({
    '& label': { color: '#1C488D', },
    '&:hover label': { color: '#000', },
    '& label.Mui-focused': { color: '#1B1B2F', },

    '& label.Mui-error': { color: '#D32F2F' },

    '& .MuiInput-underline:after': { borderBottomColor: '#1C488D', },

    '& .MuiOutlinedInput-root': {
        '& fieldset': { borderColor: '#1C488D', },
        '& .MuiInputAdornment-root svg': { fill: '#1C488D', },

        '&:hover fieldset': { borderColor: '#000', },
        '&:hover .MuiInputAdornment-root svg': { fill: '#000', },

        '&.Mui-focused fieldset': { borderColor: '#1B1B2F', },
        '&.Mui-focused .MuiInputAdornment-root svg': { fill: '#1B1B2F', },

        '&.Mui-error fieldset': { borderColor: '#D32F2F', },
        '&.Mui-error .MuiInputAdornment-root svg': { fill: '#D32F2F', },
    },
})

const StyledButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText('#1C488D'),
    backgroundColor: '#1C488D',
    borderRadius: '0px',
    fontWeight: 600,
    letterSpacing: '1px',
    textTransform: 'none',
    padding: '12px 40px',
    '&:hover': {
        backgroundColor: '#066EAE',
    },
    '&.Mui-disabled': {
        backgroundColor: '#1C488D',
        fontWeight: 600,
        color: '#fff',
        opacity: '.7',
    }
}))

const Registration = ({ isFixed, registerNewMember, membersData, setMembersData,isOpenModal, setIsOpenModal }) => {

    const [isVisibleOk, setIsVisibleOk] = React.useState(false)

    const {
        register,
        formState: {
            errors,
            isValid
        },
        handleSubmit,
        reset
    } = useForm({ mode: 'onChange' })

    const onSubmit = (data) => {  // в data придут все поля с именами и значениями

        const member = {
            fio: data.fio.replace(/"/g, ' ').trim(),
            position: data.position.replace(/"/g, ' ').trim(),
            time: data.time.replace(/"/g, ' ').trim(),
            company: data.company.replace(/"/g, ' ').trim(),
            nickname: data.nickname.replace(/"/g, ' ').trim(),
            comm_name: data.comm_name.replace(/"/g, ' ').trim() ? data.comm_name.replace(/"/g, ' ').trim() : '—'
        }

        registerNewMember(member)
            .then(response => response.json())
            .then(response => {
                if (response.message === 'OK') {
                    setMembersData([...membersData, member])
                    setIsVisibleOk(true)
                    reset()

                    setTimeout(() => {
                        setIsVisibleOk(false)
                    }, 3000)
                }
                //console.log(response.message)
            })
            .catch(err => alert(err.message))


    }

    // const [isOpenModal, setIsOpenModal] = React.useState(false)

    const handleCloseModal = (e) => {
        if (!e.target.closest(`.${c.modal_content}`) || e.target.classList.contains(`${c.closeBtn}`)) {
            setIsOpenModal(false)
        }
    }

    const stylesBtn = { marginTop: isFixed ? '70px' : '0px' }


    return (
        <div className={c.regPart}>

            {/* <div className={`registration__container ${c.container}`} style={stylesBtn}>
                <div className={`${c.regBtn}`} onClick={() => { setIsOpenModal(true) }}>
                    <span>Зарегистрироваться на турнир</span>
                </div>
            </div> */}

            <div className={`${c.modal} ${isOpenModal ? c.open : ''}`} onClick={handleCloseModal}>

                <div className={c.modal_content}>
                    <div className={c.closeBtn} >
                        &#10006;
                    </div>
                    <h2 className={c.formSubt}>Регистрация на турнир</h2>
                    <form className={c.registryForm} onSubmit={handleSubmit(onSubmit)}>
                        <div className={c.groupEl}>
                            <CssTextField className={c.nameInp} fullWidth margin='normal' variant='outlined'
                                label='ФИО' required
                                {...register('fio', { required: true, minLength: 10 })}
                                error={Boolean(errors?.fio)}
                            />
                            <Typography className={c.inpErr}>
                                {errors?.fio && 'Укажите полное ФИО (минимальная длина 10 символов)'}
                            </Typography>
                        </div>

                        <div className={c.groupEl}>
                            <CssTextField className={c.nameInp} fullWidth margin='normal' variant='outlined'
                                label='Должность' required
                                {...register('position', { required: true, minLength: 5 })}
                                error={Boolean(errors?.position)}
                            />
                            <Typography className={c.inpErr}>
                                {errors?.position && 'Укажите вашу должность (минимальная длина 5 символов)'}
                            </Typography>
                        </div>

                        <div className={c.groupEl}>
                            <CssTextField className={c.nameInp} fullWidth margin='normal' variant='outlined'
                                label='Часовой пояс' required
                                {...register('time', { required: true })}
                                error={Boolean(errors?.time)}
                                defaultValue="GMT+5 (Уфа)"
                            />
                            <Typography className={c.inpErr}>
                                {errors?.time && 'Укажите часовой пояс'}
                            </Typography>
                        </div>

                        <div className={c.groupEl}>
                            <CssTextField className={c.nameInp} fullWidth margin='normal' variant='outlined'
                                label='Название компании, в которой вы работаете' required
                                {...register('company', { required: true, minLength: 3 })}
                                error={Boolean(errors?.company)}
                            />
                            <Typography className={c.inpErr}>
                                {errors?.company && 'Укажите название компании (минимальная длина 3 символа)'}
                            </Typography>
                        </div>

                        <div className={c.groupEl}>
                            <CssTextField className={c.nameInp} fullWidth margin='normal' variant='outlined'
                                label='Никнейм в игре' required
                                {...register('nickname', { required: true, minLength: 3 })}
                                error={Boolean(errors?.nickname)}
                            />
                            <Typography className={c.inpErr}>
                                {errors?.nickname && 'Укажите никнейм (минимальная длина 3 символа)'}
                            </Typography>
                        </div>

                        <div className={c.groupEl}>
                            <CssTextField className={c.nameInp} fullWidth margin='normal' style={{marginBottom: '0px'}} variant='outlined'
                                label='Ваша версия названия команды'
                                {...register('comm_name')}

                            />
                        </div>

                        <div className={c.btnWrap}>
                            <p className={`${c.ok_lett} ${isVisibleOk ? c.visible : ''}`}>&#10003;&nbsp; Участник зарегистрирован</p>
                            <StyledButton className={c.sendBtn}
                                variant='contained' size='large'
                                disabled={!isValid}
                                type='submit'
                            >
                                Зарегистрироваться
                            </StyledButton>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}


export { Registration }