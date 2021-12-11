import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: '  app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  q1!: FormGroup;
  q2!: FormGroup;
  q3!: FormGroup;
  q4!: FormGroup;
  q5!: FormGroup;
  q6!: FormGroup;
  q7!: FormGroup;
  q8!: FormGroup;
  q9!: FormGroup;
  q10!: FormGroup;

  q1_step = false;
  q2_step = false;
  q3_step = false;
  q4_step = false;
  q5_step = false;
  q6_step = false;
  q7_step = false;
  q8_step = false;
  q9_step = false;
  q10_step = false;

  q1Title = 'HOW MUCH MONEY DO YOU NEED?';
  q2Title = 'How Old Are You?';
  q3Title = 'HOW WILL YOU REPAY THE LOAN?';
  q4Title = 'what is your income?';
  q5Title = 'Have you explored less expensive sources of funds?';
  q6Title = 'What are the terms of the loan?';
  q7Title = 'How much will the loan cost you?';
  q8Title = 'Have you explored less expensive sources of funds?';
  q9Title = 'How you plan to use the money?';
  q10Title = 'Your repayments should never be more than 30-50% of your monthly income do you know that?';

  res;
  step = 1;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.q1 = this.formBuilder.group({
      ans1: ['', Validators.required],
    });

    this.q2 = this.formBuilder.group({
      ans2: ['', Validators.required],
    });

    this.q3 = this.formBuilder.group({
      ans3: ['', Validators.required],
    });

    this.q4 = this.formBuilder.group({
      ans4: ['', Validators.required],
    });

    this.q5 = this.formBuilder.group({
      ans5: ['', Validators.required],
    });

    this.q6 = this.formBuilder.group({
      ans6: ['', Validators.required],
    });
    this.q7 = this.formBuilder.group({
      ans7: ['', Validators.required],
    });
    this.q8 = this.formBuilder.group({
      ans8: ['', Validators.required],
    });
    this.q9 = this.formBuilder.group({
      ans9: ['', Validators.required],
    });
    this.q10 = this.formBuilder.group({
      ans10: ['', Validators.required],
    });

  }

  get gq1() {

    return this.q1.controls;
  }

  get gq2() {
    return this.q2.controls;
  }

  get gq3() {
    return this.q3.controls;
  }

  get gq4() {
    return this.q4.controls;
  }

  get gq5() {
    return this.q5.controls;
  }

  get gq6() {
    return this.q6.controls;
  }

  get gq7() {
    return this.q7.controls;
  }

  get gq8() {
    return this.q8.controls;
  }

  get gq9() {
    return this.q9.controls;
  }

  get gq10() {
    return this.q10.controls;
  }

  next() {

    if (this.step == 1) {
      this.q1_step = true;
      if (this.q1.invalid) {
        return
      }
      this.step++
    }

    if (this.step == 2) {
      this.q2_step = true;
      if (this.q2.invalid) {
        return
      }
      this.step++;
    }
    if (this.step == 3) {
      this.q3_step = true;
      if (this.q3.invalid) {
        return
      }
      this.step++
    }

    if (this.step == 4) {
      this.q4_step = true;
      if (this.q4.invalid) {
        return
      }
      this.step++;
    }
    if (this.step == 5) {
      this.q5_step = true;
      if (this.q5.invalid) {
        return
      }
      this.step++
    }

    if (this.step == 6) {
      this.q6_step = true;
      if (this.q6.invalid) {
        return
      }
      this.step++;
    }
    if (this.step == 7) {
      this.q7_step = true;
      if (this.q7.invalid) {
        return
      }
      this.step++
    }

    if (this.step == 8) {
      this.q8_step = true;
      if (this.q8.invalid) {
        return
      }
      this.step++;
    }
    if (this.step == 9) {
      this.q9_step = true;
      if (this.q9.invalid) {
        return
      }
      this.step++;
    }
    if (this.step == 10) {
      this.q10_step = true;
      if (this.q10.invalid) {
        return
      }
      this.res = [
        {
          'title': this.q1Title,
          'ans': this.q1.get('ans1').value
        },
        {
          'title': this.q2Title,
          'ans': this.q2.get('ans2').value
        },

        {
          'title': this.q3Title,
          'ans': this.q3.get('ans3').value
        },
        {
          'title': this.q4Title,
          'ans': this.q4.get('ans4').value
        },
        {
          'title': this.q5Title,
          'ans': this.q5.get('ans5').value
        },
        {
          'title': this.q6Title,
          'ans': this.q6.get('ans6').value
        },
        {
          'title': this.q7Title,
          'ans': this.q7.get('ans7').value
        },
        {
          'title': this.q8Title,
          'ans': this.q8.get('ans8').value
        },
        {
          'title': this.q9Title,
          'ans': this.q9.get('ans9').value
        },
        {
          'title': this.q10Title,
          'ans': this.q10.get('ans10').value
        }];
      this.step++;
    }
  }

  previous() {

    this.step--
    if (this.step == 1) {
      this.q1_step = false;
    }
    if (this.step == 2) {
      this.q2_step = false;
    }
    if (this.step == 3) {
      this.q3_step = false;
    }
    if (this.step == 4) {
      this.q4_step = false;
    }
    if (this.step == 5) {
      this.q5_step = false;
    }
    if (this.step == 6) {
      this.q6_step = false;
    }
    if (this.step == 7) {
      this.q7_step = false;
    }
    if (this.step == 8) {
      this.q8_step = false;
    }
    if (this.step == 9) {
      this.q9_step = false;
    }
    if (this.step == 10) {
      this.q10_step = false;
    }

  }

  submit() {

    return this.res;
  }

  SelectedType(event, id: number) {
    if (id <= 18) {
      this.step++;
    }
  }
}
