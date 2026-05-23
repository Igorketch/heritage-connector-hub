import { useLanguage } from '@/contexts/LanguageContext';
import { membresHonneurData } from '@/data/membresHonneurData';
import { useTeamMembers } from '@/hooks/useTeamMembers';
import GenericMemberProfilePage from '@/components/team/GenericMemberProfilePage';

const HonneurMemberProfilePage = () => {
  const { language, t } = useLanguage();
  const { members, hasData } = useTeamMembers('honneur');
  const list = hasData ? members : membresHonneurData[language];
  return (
    <GenericMemberProfilePage
      members={list}
      backPath="/team/membres-honneur"
      backLabel={t('team.cat.honneur')}
    />
  );
};

export default HonneurMemberProfilePage;
