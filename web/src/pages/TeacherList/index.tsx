import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

 

import './styles.css';
import Input from '../../components/Input';
import Select from '../../components/Select';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os Professores disponiveis.">
                <form id="search-teachers">

                <Select
                    name="subject" 
                    label="Matéria" 
                    options={[
                         { value: 'Artes', label: 'Artes' },
                         { value: 'Biologia', label: 'Biologia' },
                         { value: 'Ciências', label: 'Ciências' },
                         { value: 'Educação fisica', label: 'Educação fisica' },
                         { value: 'Fisica', label: 'Fisica' },
                         { value: 'Geografia', label: 'Geografia' },
                         { value: 'Matematica', label: 'Matematica' },
                    ]}
                />
                 <Select 
                    name="week_day" 
                    label="Dia da semana" 
                    options={[
                         { value: '0', label: 'Domingo' },
                         { value: '1', label: 'Segunda-Feira' },
                         { value: '2', label: 'Terça-Feira' },
                         { value: '3', label: 'Quarta-Feira' },
                         { value: '4', label: 'Quinta-Feira' },
                         { value: '5', label: 'Sexta-Feira' },
                         { value: '6', label: 'Sabado' },
                         
                         
                    ]}
                />
                    
                    <Input type="time" name="time" label="Hora"/>
                    

                </form>
            </ PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )

}

export default TeacherList;