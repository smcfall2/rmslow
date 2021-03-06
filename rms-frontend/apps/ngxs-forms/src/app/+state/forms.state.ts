import { Injectable } from '@angular/core';
import { ImmutableContext } from '@ngxs-labs/immer-adapter';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { QuestionBase } from '@rms-frontend/forms';
import { SaveToDraft, SetFormsGroup, GetHelpContent, SetHelpContent } from './forms.actions';

interface NovelsStateModel {
  newNovelForm: {
    model?: {
      novelName: string;
      authors: {
        name: string;
      }[];
    };
  };
}

@State<NovelsStateModel>({
  name: 'novels',
  defaults: {
    newNovelForm: {
      model: undefined
    }
  }
})

@Injectable()
export class NovelsState { }



interface FormStateModel {
  formGroup: {
    model?: {}
  },
  questions: QuestionBase<string>[];
  drafts: any[];
  helpContent: any[];
}

@State<FormStateModel>({
  name: 'dynamicForms',
  defaults: {
    questions: [],
    formGroup: {
      model: undefined
    },
    drafts: [],
    helpContent: []
  }
})

@Injectable()
export class FormState {

  @Action(SaveToDraft)
  // @ImmutableContext()
  saveToDraft(ctx: StateContext<FormStateModel>, model: any) {
    const state = ctx.getState();
    const drafts = state.drafts;
    drafts.push(model);
    ctx.setState((st: FormStateModel) => {
      st.drafts = drafts;
      return st;
    });
  }

  @Action(SetFormsGroup)
  setFormsGroup(ctx: StateContext<FormStateModel>, model: any) {
    ctx.setState((st: FormStateModel) => {
      st.formGroup = model;
      return st;
    });
  }
  
  @Action(SetHelpContent)
  setHelpContent(ctx: StateContext<FormStateModel>, model: any) {
    const state = ctx.getState();
    const helpContent = state.helpContent;
    helpContent.push(model);
    ctx.setState((st: FormStateModel) => {
      st.helpContent = helpContent;
      return st;
    });
  }

  @Selector()
  static formGroup(state: FormStateModel) {
    return state.formGroup;
  }

  @Selector()
  static drafts(state: FormStateModel) {
    return state.drafts;
  }

  @Selector()
  static helpContents(state: FormStateModel) {
    return state.helpContent;
  }
}