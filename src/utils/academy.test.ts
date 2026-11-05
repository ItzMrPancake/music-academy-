import test from 'node:test';
import assert from 'node:assert/strict';
import {
  TUITION_TIERS,
  calculateTuition,
  validateInquiryForm,
  PROGRAMS
} from './academy.ts';

test('tuition tiers are configured with correct rates', () => {
  const group = TUITION_TIERS.find((t) => t.id === 'group');
  const standard = TUITION_TIERS.find((t) => t.id === 'standard');
  const extended = TUITION_TIERS.find((t) => t.id === 'extended');
  const intensive = TUITION_TIERS.find((t) => t.id === 'intensive');

  assert.equal(group?.rate, 70);
  assert.equal(standard?.rate, 95);
  assert.equal(extended?.rate, 142);
  assert.equal(intensive?.rate, 190);
});

test('calculateTuition computes single student fees correctly', () => {
  const standardCalc = calculateTuition('standard', false, 1);
  assert.equal(standardCalc.monthlyTuition, 95);
  assert.equal(standardCalc.registrationFee, 40);
  assert.equal(standardCalc.registrationFeeWaived, false);
  assert.equal(standardCalc.firstMonthTotal, 135);
});

test('calculateTuition waives registration fee for military families', () => {
  const militaryCalc = calculateTuition('standard', true, 1);
  assert.equal(militaryCalc.monthlyTuition, 95);
  assert.equal(militaryCalc.registrationFee, 0);
  assert.equal(militaryCalc.registrationFeeWaived, true);
  assert.equal(militaryCalc.firstMonthTotal, 95);
});

test('calculateTuition caps family registration fee at $60 for 2+ students', () => {
  const familyCalc = calculateTuition('standard', false, 2);
  assert.equal(familyCalc.monthlyTuition, 190);
  assert.equal(familyCalc.registrationFee, 60);
  assert.equal(familyCalc.firstMonthTotal, 250);

  const threeStudents = calculateTuition('group', false, 3);
  assert.equal(threeStudents.registrationFee, 60);
});

test('validateInquiryForm detects missing or invalid inputs', () => {
  const emptyResult = validateInquiryForm({
    name: '',
    phone: '',
    email: 'bad-email',
    subject: '',
    message: ''
  });

  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.name);
  assert.ok(emptyResult.errors.phone);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.subject);
  assert.ok(emptyResult.errors.message);
});

test('validateInquiryForm passes with complete and valid details', () => {
  const validResult = validateInquiryForm({
    name: 'Jane Doe',
    phone: '(940) 555-0199',
    email: 'jane@example.com',
    subject: 'Piano Lesson Availability',
    message: 'Interested in booking beginner piano sessions for my daughter.'
  });

  assert.equal(validResult.isValid, true);
  assert.deepEqual(validResult.errors, {});
});

test('all required programs are defined with rich copy', () => {
  const programIds = PROGRAMS.map((p) => p.id);
  assert.deepEqual(programIds, ['guitar', 'piano', 'voice', 'drums', 'violin']);
});
